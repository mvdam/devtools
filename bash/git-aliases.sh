#!/bin/bash

# Fix common typos ;-)
alias gti=git

alias gs="git status"
alias gc="git add . && git commit -m"
alias co="git checkout"
alias master="co master"
alias main="co main"
alias develop="co develop"
alias reset="git reset --hard"
alias cleanf="git clean -f -d"
alias pull="git pull"
alias pullf="git reset --hard origin/develop"
alias bl="git branch --list"

alias push=push-origin
alias pushnv=push-origin-no-verify
alias cb=copy-branch-name-to-clipboard

# Helper fns

# Returns current branch name
function get-branch-name {
    echo "$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)"
}

# Push current branch to orgin without providing "--set-upstream origin" every time
function push-origin {
    branch_name="$(get-branch-name)"
    git push --set-upstream origin ${branch_name}
}

# Same as "push-origin" but bypass pre-push checks (set up with Husky i.e.)
function push-origin-no-verify {
    branch_name="$(get-branch-name)"
    git push --set-upstream origin ${branch-name} --no-verify
}

function copy-branch-name-to-clipboard {
    branch_name="$(get-branch-name)"
    echo ${branch_name} | pbcopy
    echo Copied ${branch_name} to clipboard!
}
