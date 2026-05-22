# Cleanup Commands

Use these commands only after demo/testing.

## Delete AKS Cluster

```bash
az aks delete \
  --resource-group rg-asset-devops \
  --name aks-asset-devops \
  --yes
```

## Delete Full Project Resource Group

```bash
az group delete \
  --name rg-asset-devops \
  --yes
```

## Check Project Resources

```bash
az resource list \
  --resource-group rg-asset-devops \
  -o table
```

## Security Note

Rotate or delete the exposed service principal after project completion.