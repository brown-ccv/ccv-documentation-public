# Using Docker

**We provide all the Docker images used in JupyterHubs.**

[See a list of the Docker images here.](https://console.cloud.google.com/gcr/images/jupyterhub-docker-images)

To use one of those images locally:

* [Install Google Cloud SDK](https://cloud.google.com/sdk/docs/downloads-interactive)
*   Configure docker to use the gcloud command-line tool as a credential helper:

    ```sh
    gcloud auth configure-docker
    ```
* Run the image locally:

```sh
# example
docker run -it --rm -p 8888:8888 gcr.io/jupyterhub-docker-images/mpa2065:fall-2020
```
