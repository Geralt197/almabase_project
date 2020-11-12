# almabase_project
Engineering Intern Task

Following are some assumptions to run the app:

1. All the information is extracted using free github api by ajax and jquery is used to output the desired information.

2. Whenever extracting the number of repositories or number of committees, it doesn't extract more than 30 of either of them, because the related endpoint is by default set to a    maximum of 30 values and if we want to extract more than that, maybe we have to purchase additional packages from github.

3. There is a restriction on the number of times we can extract the information i.e. after a certain number of times, we cannot retrieve the information and shows an error message like rate limit exceeded. So this maybe also because of free api.

4. The app may not always show the desired repository with maximum number of forks, but the result will always be in sorted descending order.

5. Organisation name is of text type and number of repos and number of committees are of number type and also, all the inputs must be provided.
