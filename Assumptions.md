# almabase_project
Engineering Intern Task

Following are some assumptions to run the app:

1. Whenever extracting the number of repositories or number of committees, it doesn't extract more than 30 of either of them, because the related endpoint is by default set to a    maximum of 30 values and if we want to extract more than that, maybe we have to purchase additional packages from github.

2. There is a restriction on the number of times we can extract the information i.e. after a certain number of times, we cannot retrieve the information and shows an error message like rate limit exceeded. So this maybe also because of free api.

3. The app may not always show the desired repository with maximum number of forks, but the result will always be in sorted descending order.
