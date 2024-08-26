import {useCallback, useEffect, useState} from 'react'
import './App.css'
import {Cat} from "./cats/models/Cat.ts";
import catsService from "./cats/services/catsService.ts";

function App() {
  const [cats, setCats] = useState<Cat[]>([]);

  const createCat: (cat: Cat) => Promise<void> = useCallback(async (cat) => {
      try {
          const createdCat = await catsService.createCat(cat)
          setCats((prev) => [...prev, createdCat])
          alert(`Created cat: Name ${createdCat.name}; Age ${createdCat.age}; Breed ${createdCat.breed}`)
      } catch (e) {
          console.error(e)
      }
  }, [])

  const createValidCat: () => void = useCallback(() => {
      createCat({name: 'New Whiskers', age: 33, breed: 'Siamese'})
  }, [createCat]);

  const createInvalidCat: () => void = useCallback(() => {
      createCat({name: 'Bad Garfield', age: -2, breed: 'Persian'})
  }, [createCat]);

    useEffect(() => {
        const fetchAllCatsInitially = async () => {
            const cats = await catsService.getAllCats();
            setCats(cats);
        }
        fetchAllCatsInitially();
    }, []);

  return (
      <>
          {cats.map((cat, index) => (
              <>
                  <span key={index}>Cat {index + 1}: Name: {cat.name}; Age: {cat.age}; Breed: {cat.breed}</span>
                  <br />
              </>
          ))}
          <button onClick={createValidCat}>Create "valid" cat</button>
          <button onClick={createInvalidCat}>Create "invalid" cat</button>
      </>
  )
}

export default App
