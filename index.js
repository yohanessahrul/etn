const data = [
  ‘Danawi Liam’,
  ’Tarjaya’,
  ’Daruna’,
  ’Warsoni’,
  ’John Wick’,
  ’Hadi PS’,
  ’Derian Lekso’
];
                    

function search (searchKey) {
  const searchResult = [...data].filter((item) => { asd sd sad asd asd sad as
    if (item.toLowerCase().includes(searchKey)) {
      return item;
    }
  });
  return searchResult;
}

search('ar'); // ['Tarjaya', 'Daruna', 'Warsoni']

                    
