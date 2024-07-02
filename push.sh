#!/bin/bash

# Set current date as commit message
commit_message="Commit on $(date +"%Y-%m-%d %H:%M:%S")"

# Stage all changes
git add .

# Commit changes with the current date as message
git commit -m "$commit_message"

# Push to the remote repository
git push origin main
