import { graphql, http, HttpResponse, passthrough } from 'msw';

export const handlers = [
    http.get('https://api.example.com/user', ({}) => {
        return HttpResponse.json({
            id: 'a',
            firstName: 'Maurick',
            lastName: 'Villalobos',
        });
    }),
    http.get('https://api.example.com/hello', ({request}) => {
        console.log('request: ', request);
    }),
    http.get<{id?: string}>('/books/:id', ({params}) =>{
        if (params.id==='a'){
            return new HttpResponse({error: 'Unathorized Access'}, {status: 404})
        }
        return HttpResponse.json({
            id: params.id,
            title: "Te Lord of the Rings",
        });
    }),
    http.get('/resource', async ({ request }) => {
        const data = await request.clone().json();
        if (data?.id === 'a') {
            return HttpResponse.json({ id: 'a' });
        }
        return passthrough();
    }),
    http.get('/resource', ({ cookies }) => {
        if(!cookies.authToken){
            return new HttpResponse(null, {status: 403});
        }
        return HttpResponse.json({name: "John"});
    }), 
    graphql.query('ListMovies', () => {
        return HttpResponse.json({
            data: {
                movies: [
                    {
                        title: "Harry Potter",
                    },
                    {
                        title: "Star Wars: The Empire Strikes",
                    },
                ],
            },
        })
    })
]