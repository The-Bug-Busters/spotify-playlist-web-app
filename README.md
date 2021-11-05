# 🎶 Spotify Song Search App to save them in playlists in local storage

[![Spotify Playlist CI/CD](https://github.com/The-Bug-Busters/spotify-playlist-web-app/actions/workflows/main.yml/badge.svg)](https://github.com/The-Bug-Busters/spotify-playlist-web-app/actions/workflows/main.yml)

This project is the result of an exam assignment of the lecture "Web Services" 
at the DHBW in Friedrichshafen, Germany. 

The main part of the assignment was to deploy the application with Ansible and to demonstrate its capabilities.

**👉 If online, you can see the application on [dhbw.yaman.pro](https://dhbw.yaman.pro/).**

## ⭐ Features

The web application only contains basic functionality to search a song and to add it to a 
playlist which will be saved in the local storage of the browser.

## 🗄️ Tech Stack

*(this literally describes over-engineering)*

- **[Ansible](https://www.ansible.com/)** for deployment
- **[AWS EC2](https://aws.amazon.com/ec2/?nc1=h_ls)** as our hosting provider
- **[Cloudflare](https://www.cloudflare.com)** as our DNS and for automated SSL certificates
- **[Docker](https://www.docker.com/)** to containerize the application for easier deployment
- **[GitHub Actions](https://www.ansible.com/)** for automating the deployment after each push to the `main` branch
    - dawidd6/action-ansible-playbook@v2.5.0 from [*dawidd6*](https://github.com/dawidd6/action-ansible-playbook) to run the Ansible playbook
    - and various other Actions for [creating the Docker image and pushing it](https://docs.github.com/en/actions/publishing-packages/publishing-docker-images#publishing-images-to-github-packages)
- **[ghcr.io](https://github.com/features/packages)** for hosting our Docker image on the GitHub Package registry.
- **[Material UI](https://mui.com/)** as our front-end UI framework
- **[React](https://reactjs.org/)** as our front-end library
- **[spotify-web-api-node](https://github.com/thelinmichael/spotify-web-api-node)** from [*thelinmichael*](https://github.com/thelinmichael/spotify-web-api-node) to interact with the Spotify Web API
- **[Traefik](https://doc.traefik.io/traefik/)** as the reverse proxy to handle incoming requests

## 👷 Authors
* [Gary Lude](https://github.com/Kiodok)
* [Lars Strölin](https://github.com/M4RD3K)
* [Julian Yaman](https://github.com/julianYaman)
