# Distributing Lectures

## Option 1: Distribute using nbgitpuller

See [nbgitpuller page](../content-sync-via-link/nbgitpuller.md) to see how to generate links for distributing your repository

{% hint style="danger" %}
You should **not** use nbgitpuller when:

1. You are an instructor using a JupyterHub / running notebooks locally to create materials and push them to a git repository. You should just use git directly, since the assumptions and design of nbgitpuller **will** surprise you in unexpected ways if you are pushing with git but pulling with nbgitpuller.
2. Your students are performing manual git operations on the git repository cloned as well as using nbgitpuller. Mixing manual git operations + automatic nbgitpuller operations is going to cause surprises on an ongoing basis, and should be avoided.
{% endhint %}

## Option 2: Distribute one lecture materials as assigments

1\. Have the materials for one lecture in a repository\
2\. Distribute as assignment, with its own link, and no deadline

### Advantages

* Students can stay as outside collaborators for ever.
* There is no special consideration for shopping period
* All of their lecture work is automatically set up in your organization … with a default place for them to work there are less chances for them to be pushing it to their own public GitHub…
* Less management of merging conflicts and remotes

### Disadvantages

* There will be a lot of repositories in the organization.
* No simple mechanism for pushing changes after distributiom

## Option 3: All lectures in one repository

![Lecture Workflow](<../.gitbook/assets/GitHub2FJupyterHubLecturesWorkflow-6941c84d-791b-41c2-a48a-8a403e9f33b0 (1).png>)

**During shopping period:**

1. Set up the lectures to be public
2. Students clone and pull from public repository
3.

**After shopping period:**

1\. Have a first assigment to generate a link.\
2\. Students that accept the link become **outside collaborators** in your organization\
3\. Invite the students to join the organization.\
4\. You should make a team for the students and give them read access to the private lecture repository\
5\. As members of the organization, they can create a repository to push their personal changes to the lectures. In order to sync with their own repository and with yours, they will need to set up two remotes. See [https://help.github.com/articles/adding-a-remote/](https://help.github.com/articles/adding-a-remote/) for more help\
<br>

###
