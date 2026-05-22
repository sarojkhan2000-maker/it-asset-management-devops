# IT Asset Management DevOps Project

A simple IT Asset Management Portal built to demonstrate real-world DevOps deployment using Docker, Nginx, Azure Container Registry, AKS Kubernetes, Nginx Ingress, and GitHub Actions CI/CD.

## Features

- Add server asset
- View server assets
- Search assets
- Delete asset
- Backend REST API
- JSON file storage
- Dockerized frontend and backend
- Kubernetes deployment on AKS
- Public access through Nginx Ingress
- Automated CI/CD using GitHub Actions

## Asset Fields

- serverName
- ipAddress
- ownerTeam

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express |
| Storage | JSON file |
| Container | Docker |
| Reverse Proxy | Nginx |
| Registry | Azure Container Registry |
| Orchestration | Azure Kubernetes Service |
| Public Access | Nginx Ingress |
| CI/CD | GitHub Actions |

## Architecture

```mermaid
flowchart TD
    User[User Browser] --> Ingress[Nginx Ingress Public IP]
    Ingress --> Frontend[Frontend Service]
    Ingress --> Backend[Backend Service]
    Frontend --> Backend
    Backend --> PVC[Persistent Volume Claim]
    GitHub[GitHub Actions] --> ACR[Azure Container Registry]
    ACR --> AKS[Azure Kubernetes Service]

    Kubernetes Components
Namespace: asset-app
Backend Deployment
Frontend Deployment
Backend Service
Frontend Service
PersistentVolumeClaim
Nginx Ingress
API Endpoints
Method	Endpoint	Purpose
GET	/api/health	Backend health check
GET	/api/assets	Get all assets
POST	/api/assets	Add asset
DELETE	/api/assets/:id	Delete asset
Live URL
http://20.204.214.79
Local Docker Run
docker compose up --build
AKS Verification
kubectl get pods -n asset-app
kubectl get svc -n asset-app
kubectl get ingress -n asset-app
Project Outcome

This project demonstrates end-to-end DevOps skills including containerization, Kubernetes deployment, Azure Container Registry, Nginx Ingress, and automated CI/CD deployment to AKS.