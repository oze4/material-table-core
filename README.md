# @material-table/core

[![Build Status](https://travis-ci.org/oze4/material-table-core.svg?branch=master)](https://travis-ci.org/oze4/material-table-core)

<b>This is a *maintained* <a href="#explain-fork">fork*</a> of <a href="https://github.com/mbrn/material-table">mbrn/material-table</a><code>v1.57.2</code></b><br/><small id="explain-fork">*fork means I downloaded the repo to .zip and started this repo with that code</small>

### We will remain 100% compatable with `material-table`

# Table of Contents

### About 

 - [Why?](#why)
 - [Intent](#hmm)
 - [Goals](#goals)
 - [Want to help?](#want-to-help)

### Getting Started

 - [Installation](#installation)
 - [Documentation](#documentation)

---

[`material-table` GitHub](https://github.com/mbrn/material-table)

 ---

## Installation

 - `npm install @material-table/core`
 - `yarn add @material-table/core`

Instead of using `material-table` for `import` statements, use `@material-table/core`. Simply change your import statements.

```javascript
// This
import MaterialTable from "material-table";
// would become
import MaterialTable /*, { MTableBodyRow, etc.. } */ from '@material-table/core'; 
```

## Why?

Over the past 8 months or so, `material-table` has been less than responsive. `material-table` appears to be slowly going away (nobody seems to be maintaining it anymore) and I was tired of spending my own time submitting PR's with no response. I have also [seen](https://github.com/mbrn/material-table/issues/1896) others express concern about this.

I even [asked to help them out](https://github.com/mbrn/material-table/issues/1171) but was ignored, thus this fork was born.

## Intent

My intent is not to rip off `material-table`. **I do not plan on making any dramatic changes to the codebase.** 

Recently, [I have been very active](https://github.com/mbrn/material-table/issues?q=is%3Aissue+commenter%3Aoze4) in assisting with issues, most of the solutions to these issues are hacky and could be easily resolved within the codebase. Occassionally, the solution is as simple as updating/improving the docs.

## Goals

My goal is to chip away at the [746 open issues](https://github.com/mbrn/material-table/issues) and [69 open pull requests](https://github.com/mbrn/material-table/pulls), update documentation, [and make minor improvements](#demo) that help us all.

I want to keep things as close to they are now so that if the author of `material-table`, [mehmet baran](https://twitter.com/baranmehmet), ever wants to merge this code, we could easily do that. I would gladly provide ownership of the [npm organization](https://docs.npmjs.com/orgs/), [@material-table](https://www.npmjs.com/package/@material-table/core), to him if he ever wanted to publish packages using this name.


## Want to help?

Gladly accepting "applications" :) ..but seriously, my goal is to be responsive (thanks COVID). I have no issue giving access/permission to those that wish to help improve this excellent product!

## Demo

[You can check out live demos here](https://oze4.github.io/material-table-core/)

## Documentation

For now, the existing material-table docs are valid.

  - [material-table README](https://github.com/mbrn/material-table/blob/master/README.md)
  - [material-table API Documentation](https://material-table.com)

# [Please check out the original repository here](https://github.com/mbrn/material-table)
