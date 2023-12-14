//use server simply means whatever is writen here will only run on the server side
"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

//fetching of data from the api
export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  //obviously you want to receive your data in json format. lol
  const data = await response.json();

  //print them out
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
