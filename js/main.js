// const categoriesDiv = document.getElementById("cate");
// const a = document.getElementById("a");
// const b = document.getElementById("b");
// const c = document.getElementById("c");
// const btn = document.getElementById("btn");
//FETCH GET
// fetch('https://northwind.vercel.app/api/customers')
// .then(res => res.json())
// .then(data => {
//     data.forEach(item => {
//         const p = document.createElement('p')
//         p.textContent = `${item.companyName} - ${item.ContactName}`
//         categoriesDiv.appendChild(p)
//     })
// })

//FETCH POST
// btn.addEventListener('click', function () {
//     fetch('https://northwind.vercel.app/api/customers', {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             companyName: a.value,
//             ContactName: b.value
//            }),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log("data send" + data);
//           });
// })

// FETCH DELETE
// function FetchDel() {
//         let url = `https://northwind.vercel.app/api/customers}`;

//         fetch(url, {
//           method: "DELETE",
//         }).then((res) => console.log(res));
//       }

// btn.addEventListener('click', FetchDel)



//AXIOS GET MEthod
// axios.get("https://northwind.vercel.app/api/customers/")
// .then((res) => {
    //   console.log(res.data);
    // });
    
    
    // AXIOS POST method
    // function fetchPost () {
        //     axios.post("https://northwind.vercel.app/api/customers/", {
            //     name: a.value,
            //     description: b.value
            // }).then(res => {
                //     console.log(res);
                // })
                // }
                // btn.addEventListener('click', fetchPost)
                
//AXIOS DELETE Method

// function axiosDelete () {
//     axios.delete(`https://northwind.vercel.app/api/customers/${ido.value}`)
// }
// btn.addEventListener('click', axiosDelete)