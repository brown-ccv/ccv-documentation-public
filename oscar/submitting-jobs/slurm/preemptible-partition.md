# Preemptible Partition

CCV provides a preemptible Slurm partition that allows gpu condo account holders to submit jobs beyond their per-account resource limits by utilizing idle capacity across the cluster.

### Available Partitions

| **Partition** | **Eligible Users** | **Resource Target**  |
| ------------- | ------------------ | -------------------- |
| gpu-scavenger | GPU Condo Holders  | GPU and GPU-HE nodes |

{% hint style="info" %}
Access is restricted exclusively to active GPU condo entitlement holders. Users with CPU-only condo access or standard non-condo accounts cannot submit jobs to `gpu-scavenger`.
{% endhint %}

### How Preemption Works

Jobs submitted to preemptible partition bypass condo CPU, GPU, and memory caps. In exchange for higher throughput, your job may be interrupted if a non-preemptable job needs those compute resources.

* Batch Jobs: Automatically requeued by Slurm when preempted, returning to the pending queue until resources become free again.
* Interactive Jobs: Terminated immediately upon preemption and are not requeued.

{% hint style="info" %}
Only jobs from condo holders and priority account users can preempts the jobs in the preemptible partition.
{% endhint %}

### Workload Suitability

#### Recommended Use Cases

* Hyperparameter Sweeps & Arrays: Independent task sets where individual task retries do not break the pipeline.
* Checkpointed Training Runs: Deep learning models (PyTorch, TensorFlow) configured to restore state from disk.
* Fault-Tolerant Simulations: Molecular Dynamics (MD), Computational Fluid Dynamics (CFD), or custom scripts capable of resuming from periodic save states.

#### Not Recommended

* Workloads that cannot save intermediate state to disk.
* Real-time or time-critical calculations requiring guaranteed completion windows.
* Workloads requiring persistent, uninterrupted interactive sessions.

### Best Practices & Guidelines

#### 1. Implement Frequent Checkpointing

Save intermediate progress to disk every 15 to 30 minutes. Ensure your application checks for existing checkpoint files on startup and resumes execution automatically instead of restarting from scratch.

The following batch script traps the preemption or walltime signal, executes a custom checkpoint function, and terminates safely.

```
#!/bin/bash
#SBATCH --job-name=checkpoint_job
#SBATCH --ntasks-per-node=20
#SBATCH --nodes=1
#SBATCH --partition=gpu-scavenger
#SBATCH --gres=gpu:1
#SBATCH --time=02:00:00
#SBATCH --signal=B:TERM@60       # Send SIGTERM to the batch shell 60s before termination
#SBATCH --output=job_%j.log

# 1. Define the checkpoint handler function
save_checkpoint_and_exit() {
    echo "[$(date)] SIGTERM received from Slurm. Saving final checkpoint..."
    
    # Place your checkpoint or state-saving commands here
    # Example: python3 -c "import model; model.save_checkpoint()"
    
    echo "[$(date)] Checkpoint successfully saved. Exiting cleanly."
    exit 0
}

# 2. Trap SIGTERM and attach it to the handler function
trap 'save_checkpoint_and_exit' SIGTERM

# 3. Execute your workload in the background
./log.sh &
JOB_PID=$!

# 4. Wait for the background process so Bash can capture signals
wait "$JOB_PID"
```

#### 2. Append to Log Output

When a job is preempted and requeued, Slurm overwrites standard output logs (`slurm-%j.out`). To preserve log history across multiple restart attempts, redirect your script output explicitly using append mode (`>>`):

Bash

```
python my_script.py >> my_job_output.log 2>&1
```

#### 3. Opt Out of Auto-Requeue (Optional)

If your job should fail completely upon preemption rather than restart automatically, disable requeuing in your batch header:

Bash

```
#SBATCH --no-requeue
```
