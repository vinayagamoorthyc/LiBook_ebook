import axios from 'axios';
import {useEffect, useState } from "react";
 
function BookCreate()
{
  
  const [bookId, setBookId] = useState('');
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [url,setUrl] = useState("");
  const [desc,setDesc] = useState("");
  const [books, setBooks] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:8080/books/getAll")
    .then((e=>setBooks(e.data)))
    .catch(err=>console.log(err));
    }, []);
    
      async function save(e){
          e.preventDefault();
          axios.post("http://localhost:8080/books/create",
          {
          name: name,
          author: author,
            year: year,url:url,desc:desc
          }).then(()=>{
            alert("Student Registation Successfully");
            window.location.reload();
          }).catch((err)=>alert("User Registation Failed"));
    }

  
    async function editBook(e)
    {
      setName(e.name);
      setAuthor(e.author);
      setYear(e.year); 
      setBookId(e.bookId);
      setUrl(e.url);
      setDesc(e.desc);
    }
  
    async function DeleteBook(id)
    {
          await axios.delete("http://localhost:8080/books/delete/" + id).then(()=>{
            alert("Student deleted Successfully");
            window.location.reload();
          })
    }
  
    async function update(e)
    {
      e.preventDefault();
          await axios.put("http://localhost:8080/books/edit/" + bookId ,
        {name: name,author: author,year: year,url:url})
        .then(()=>{
          alert("Registation Updateddddd");
          setBookId("");
          setName("");
          setAuthor("");
          setYear("");
          setUrl("");
          window.location.reload();
        }).catch(err=>alert("Student Updateddd Failed"));
    }

  return (
    <div>
       <h1>Student Details</h1>
       <div class="container mt-4" >
          <form>
             
              <div class="form-group">
                <label>Book Name</label>
                <input  type="text" class="form-control" id="bookname"
                value={name}
                onChange={(e) =>
                  {
                    setName(e.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <label>Book Author</label>
                <input  type="text" class="form-control" id="author" 
                 value={author}
                  onChange={(e) =>
                    {
                      setAuthor(e.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Year of Publication</label>
                <input type="text" class="form-control" id="year" 
                  value={year}
                onChange={(e) =>
                  {
                    setYear(e.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>url</label>
                <input  type="text" class="form-control" id="bookurl"
                value={url}
                onChange={(e) =>
                  {
                    setUrl(e.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>desc</label>
                <input  type="text" class="form-control" id="bookdesc"
                value={desc}
                onChange={(e) =>
                  {
                    setDesc(e.target.value);      
                  }}
                />
              </div>

              <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Add Book</button>

              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>   
            </form>
          </div>
                <br/>
<table class="table" align="center">
  <thead>
    <tr>
      <th scope="col">Book Name</th>
      <th scope="col">Book Author</th>
      <th scope="col">Published Year</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {books.map((e)=>
       {
            return(
            <tbody>
                <tr>
                <td>{e.name}</td>
                <td>{e.author}</td>
                <td>{e.year}</td>
                <td>{e.url}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editBook(e)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteBook(e.bookId)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
            );
        }
  
  export default BookCreate;