fetch("http://localhost:3000/data",{
    method:"post", 
    headers: {
      "Content-Type": "application/json",
      "Authorization": "chuong"
    },
    credentials: "include"
})
.then(res => res.json())
.then(data => console.log(data))
