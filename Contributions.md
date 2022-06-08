# Commit Message and PR Conventions

## Commit Message Convention

Every commit should be self-explanatory about the work being committed.

### **Format of the commit message**

> ```
> <type>(<scope>): <subject>
> <BLANK LINE>
> <body>
> <BLANK LINE>
> <footer>
> ```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on github as well as in various git tools.

**Subject Line**

Subject line contains succinct description of the change.

**Allowed `<type>`**

- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)
- add (new implementation)

**Allowed `<scope>`**

Scope could be anything specifying place of the commit change. For example fileName, particular section, etc...

**`<subject>` text**

- use imperative, present tense: “change” not “changed” nor “changes”
- don't capitalize first letter
- no dot (.) at the end

**Message body**

- just as in use imperative, present tense: “change” not “changed” nor “changes”
- includes motivation for the change and contrasts with previous behavior

**Message footer**

Breaking changes - All breaking changes have to be mentioned in footer with the description of the change, justification and migration notes.

**Examples:**

1. fix(ABC.js): wierd issue because of refreshing the app in between the calls are made, fixes #123
2. test(Abc.spec.js): covered xyz scenario by mocking mno
3. ...

## Pull Request Conventions

The benefits are:

1. Easy for PR reviewers to know what is the PR about and what needs to be focused while reviewing
2. Automatic changelog generation. PRs which get merged in between the last two latest tags in the repo.

### General Format for MR Description

```
Add anything relevant to MR here.
```

> ```
> <changelog>
>
> 1. MR_TYPE :: MR_HEADING :: MR_BRIEF_DESCRIPTION
> 2. ...
> 3. ...
>
> </changelog>
> ```

```


```

Currently the Changelog supports three Major types: `Feature`, `Improvement / enhancement / optimization`, `Bugfix / fix / hotfix / bug`, `Testing / test / tests` and `Other`.

So, an MR opened for a bugfix, will have the following structure.

> ```
> <changelog>
>
> 1. Bugfix :: Fix for Segment-Box :: A major bug regarding the tab-switching in Segment-Box has been fixed.
>
> </changelog>
>
> This needs to be reviewed Urgently.
> cc @user1 @user2
> ```

Similarly for other MR-Types and for adding multiple points.

> ```
> Note: This MR depends upon some *other* branch.
>
> <changelog>
>
> 1. Feature :: Unlimited visitors plan :: There is a new plan supported by VWO that will give them uncapped visitors quota. The account settings will show "Unlimited Visitors".
> 2. Bugfix :: Fix for Segment-Box :: A major bug regarding the tab-switching in Segment-Box has been fixed.
>
> </changelog>
>
> cc @user1 @user2
> ```

**Adding Contributors**

Person who has opened the PR will be automatically picked up. Other contributors need to be specified manually using a `cont` tag.

Example:

> ```
> <changelog>
>
> 1. Feature :: Unlimited visitors plan :: There is a new plan supported by VWO that will give them uncapped visitors quota. The account settings will show "Unlimited Visitors".
> 2. Bugfix :: Fix for Segment-Box :: A major bug regarding the tab-switching in Segment-Box has been fixed.
>
> </changelog>
> <cont>Addy Osmani, Todd Motto</cont>
> ```

**Adding QA**

Persons who have tested the work done in the PR needs to be mentioned.

Example:

> ```
> <changelog>
>
> 1. Feature :: Unlimited visitors plan :: There is a new plan supported by VWO that will give them uncapped visitors quota. The account settings will show "Unlimited Visitors".
> 2. Bugfix :: Fix for Segment-Box :: A major bug regarding the tab-switching in Segment-Box has been fixed.
>
> </changelog>
> <cont>Addy Osmani, Todd Motto</cont>>
> <qa>Mr. Tester, Test Master, ABC</qa>
>
>
> ```
