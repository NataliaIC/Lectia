// =====Exercitiul 1========

fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
})

.then( (response) => {
    return response.json()
}) .then ((data) => {
    for (let i = 0; i < 15; i++) {
        const post = data[i];
        const rand = i + 1;
console.log(`rand:${rand}`)        
console.log(`Titlu: ${post.title}`);
console.log(`Body: ${post.body}`);
console.log('---');
    }
})




// ===========Exercitiul 2 ================
// ============Pentru metoda POST nu sa intamplat nimic in terminal. Why?======== 

fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: 'My new title',
    body: 'Some text in body'
}),
headers: {
    'Content-type': 'application/json; charset=UTF-8',
}
})



// =======method DELETE============= 

const stergeRand = [1, 14];

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET'
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    stergeRand.forEach(rand => {
      const postRand = data[rand - 1].rand; 
      fetch(`https://jsonplaceholder.typicode.com/posts/${postRand}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.status === 200) {
            console.log(`A fost șters rândul: ${rand}`);
          } else {
            console.error(`Nu poate fi șters: ${rand}`);
          }
        });
    });
  })


// ==========method PUT==============

// ==================Aceasta metoda am gasit in Google, dar nu inteleg de ce am primit raspuns {} =================

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'PUT',
  
      body: JSON.stringify({
      title: 'My new title',
      body: 'Some text in body'
  }),
  headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
  .then((result) => result.json())
  .then((data) => console.log(data))
