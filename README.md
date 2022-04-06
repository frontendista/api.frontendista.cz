<div align="center">
    <h1>api.frontendista.cz</h1>
    <strong>Project Vi</strong>
</div>

<br />

<p align="center">
  <a href="https://github.com/Thesoreon/api.frontendista.cz/actions/workflows/staging.yml">
    <img src="https://github.com/Thesoreon/api.frontendista.cz/actions/workflows/staging.yml/badge.svg" />
  </a>
</p>

## 1. Installation

### 1.1 Prerequisites

- node.js (lts) runtime
- pnpm package manager (not exclusive, but preferred)

### 1.2 Environment variables

| Name                            | Value                              | Required |
| ------------------------------- | ---------------------------------- | -------- |
| DISCORD_CONTACT_MESSAGE_WEBHOOK | _hidden_                           | ✅       |
| ENVIRONMENT                     | "dev" or "staging" or "production" | ✅       |
| BASE_PATH                       | empty or "staging" or "v1"         | ✅       |

### 1.3 Development

```sh
# Clone and change directory
git clone git@github.com:Thesoreon/api.frontendista.cz.git
cd frontendista.cz

# Install dependencies
pnpm install

# Run development
pnpm dev
```
