"use client";

import { useState, useEffect } from "react";

export default function Beer() {
  const [beer, setBeer] = useState([]);
  const [chooseBeer, setChooseBeer] = useState({});

  async function fetchBeer() {
    const response = await fetch(
      "https://random-data-api.com/api/v2/beers?size=20"
    );
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    setBeer(data);
  }
  useEffect(() => {
    fetchBeer();
  }, []);

  function handleSelect(e) {
    //e.preventDefault();
    //fetchBeer();
    for (let i = 0; i < beer.length; i++) {
      if (e.target.value === beer[i].name) {
        setChooseBeer(beer[i]);
      }
    }
  }

  return (
    <div>
      <h4>Beer</h4>
      <p>
        Here's an API to fetch 20 beers:
        <a href="https://random-data-api.com/api/v2/beers?size=20">
          https://random-data-api.com/api/v2/beers?size=20
        </a>
      </p>
      <p>Choose your favorite Beer to see its details.</p>
      <select id="" name="" value={chooseBeer} onChange={handleSelect}>
        <option value="">Please Select</option>
        {beer.map((oneBeer) => {
          return (
            <option key={oneBeer.uid} value={oneBeer.name}>
              {oneBeer.name}
            </option>
          );
        })}
      </select>
      {chooseBeer.name ? (
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Uid</th>
              <th>Brand</th>
              <th>Name</th>
              <th>Style</th>
              <th>Hope</th>
              <th>Yeast</th>
              <th>Malts</th>
              <th>ibu</th>
              <th>alcohol</th>
              <th>blg</th>
            </tr>
            <tr>
              <th>{chooseBeer.id}</th>
              <th>{chooseBeer.uid}</th>
              <th>{chooseBeer.brand}</th>
              <th>{chooseBeer.name}</th>
              <th>{chooseBeer.style}</th>
              <th>{chooseBeer.hope}</th>
              <th>{chooseBeer.yeast}</th>
              <th>{chooseBeer.malts}</th>
              <th>{chooseBeer.ibu}</th>
              <th>{chooseBeer.alcohol}</th>
              <th>{chooseBeer.blg}</th>
            </tr>
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
}
