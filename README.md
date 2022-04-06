<div align="center">
    <h1>api.frontendista.cz</h1>
    <strong>Project Vi</strong>
</div>

<!-- <p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
</p>
<p align="center">
  <a href="https://github.com/Thesoreon/frontendista.cz/actions/workflows/build_lint_test_staging.yml">
    <img src="https://github.com/thesoreon/frontendista.cz/actions/workflows/build_lint_test_staging.yml/badge.svg" />
  </a>
  <a href="https://github.com/Thesoreon/frontendista.cz/actions/workflows/build_lint_test_production.yml">
    <img src="https://github.com/Thesoreon/frontendista.cz/actions/workflows/build_lint_test_production.yml/badge.svg" />
  </a>
</p> -->

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
