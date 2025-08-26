from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.lib.styles import getSampleStyleSheet

# File path
file_path = "/git_commands.pdf"

# Create document
doc = SimpleDocTemplate(file_path, pagesize=A4)
styles = getSampleStyleSheet()
story = []

# Title
story.append(Paragraph("Git Version Control Commands (Basic to Intermediate)", styles['Title']))
story.append(Spacer(1, 12))

# Sections with commands
commands = {
    "Basic Commands": [
        "git init – Initialize a new Git repository",
        "git clone <url> – Clone an existing repository",
        "git status – Show status of changes",
        "git add <file> – Add a file to staging",
        "git add . – Add all files to staging",
        "git commit -m 'message' – Commit changes",
        "git log – View commit history",
        "git diff – Show changes between commits or working directory",
        "git config --global user.name 'Your Name' – Set username",
        "git config --global user.email 'you@example.com' – Set email"
    ],
    "Intermediate Commands": [
        "git branch – List branches",
        "git branch <name> – Create a new branch",
        "git checkout <branch> – Switch branches",
        "git checkout -b <branch> – Create and switch to new branch",
        "git merge <branch> – Merge a branch into current branch",
        "git pull – Fetch and merge changes from remote",
        "git push – Push changes to remote repository",
        "git remote -v – Show remotes",
        "git reset --hard HEAD~1 – Undo last commit",
        "git stash – Save changes temporarily",
        "git stash pop – Reapply stashed changes",
        "git rebase <branch> – Reapply commits on top of another base",
        "git tag <name> – Create a tag",
        "git show <commit/tag> – Show details of a commit or tag",
        "git reflog – Show history of HEAD changes"
    ]
}

# Add commands to document
for section, cmds in commands.items():
    story.append(Paragraph(section, styles['Heading2']))
    story.append(Spacer(1, 6))
    items = [ListItem(Paragraph(cmd, styles['Normal'])) for cmd in cmds]
    story.append(ListFlowable(items, bulletType='bullet'))
    story.append(Spacer(1, 12))

# Build PDF
doc.build(story)

file_path
