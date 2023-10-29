"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

export const musicCollection = {
  albums: [
    {
      title: "Album 1",
      artist: "Artist 1",
      year: "2000",
    },
    {
      title: "Album 2",
      artist: "Artist 2",
      year: "2005",
    },
    {
      title: "Album 3",
      artist: "Artist 3",
      year: "2010",
    },
  ],

  [Symbol.iterator]() {
    let index = 0;
    const albums = this.albums;

    return {
      next() {
        if (index < albums.length) {
          const album = albums[index++];
          const { title, artist, year } = album;
          return {
            value: `${title} - ${artist} (${year})`,
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};


export const printAlbum = (musicCollectio) => {
  for (const album of musicCollection) {
    console.log(album);
  }
}

