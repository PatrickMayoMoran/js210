const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);

/*
Error! You can us \ to escape newlines at the end of a line to 
write and concatenate long strings. BUT there cannot be any spaces or tabs after the \,
Otherwise, JavaScript will fail to find the ending quote.
To correct the above, we need to have no spaces after \
*/

let lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut \
enim ad minim veniam, quis nostrud exercitation ullamco laboris \
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor \
in reprehenderit in voluptate velit esse cillum dolore eu fugiat \
nulla pariatur. Excepteur sint occaecat cupidatat non proident, \
sunt in culpa qui officia deserunt mollit anim id est laborum.';
