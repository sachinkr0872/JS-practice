// ----------REST ------ Representational State Transfer(a http requests)
// ----------API ------- Application Programming Interface(messenger)

// ---------HTTP methods ----------- 1. GET(retrieve data) , 2. POST(submit data), 3. PUT(update a specified resource) , 4. DELETE , 5. HEAD(same as GET but doesn't return a body) , 6. OPTIONS(returns the supported HTTP methods) 7. PATCH(update partial resources)



// -----------Endpoints--------- The URI/URL where api/service can be accessed by a client application
//             --- GET (https://mysite.com/api/users) gives users data
//            --- GET (https://mysite.com/api/users/1 or users/details/1) gives users details with id
//            --- POST (https://mysite.com/api/users) add users to the server or the database
//            --- PUT (https://mysite.com/api/users/1 or users/update/1) update the user data
//            --- DELETE (https://mysite.com/api/users/1 or users/delete/1) delete the user data



//----------- Authentication--------Some API's require Authentication to use their service . This could be free or paid.

// curl-H"Authentication:token OAUTH-TOKEN" https://api.github.com   (through header)
// curl https://api.github.com/?access_token=OAUTH-TOKEN   (through parameter)
// curl 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyy'  
                  






