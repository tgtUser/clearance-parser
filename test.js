const file = document.getElementById('file-input');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
  const reader = new FileReader();
  reader.onload = () => {
    const data = reader.result;
    const dataArr = data.split(/\n|,/);

    const formattedArr = dataArr.map(element => {
      return formatString(element);
    });

    const trimmedArr = [];
    for (let i = 0; i < formattedArr.length; i++) {
      let row = [];
      if (departments.includes(formattedArr[i])) {
        row.push(formattedArr[i]);
        row.push(parseInt(formattedArr[i + 2]));
        trimmedArr.push(row);
      }
    }

    for (let i = 0; i < trimmedArr.length; i++) {
      totals[trimmedArr[i][0]] += trimmedArr[i][1];
    }

    const instructions = document.getElementById('instructions');
    instructions.style.display = 'none';
    file.style.display = 'none';
    button.style.display = 'none';

    generateTable();
  }
  reader.readAsText(file.files[0]);
});

function formatString(string) {
  const splitString = string.split('');
  return splitString.slice(1, splitString.length - 1).join('');
}

function generateTable() {
  const table = document.createElement('table');
  table.id = 'info';

  const Header = table.insertRow();
    Header.id = "table-header";
    const dept = Header.insertCell();
    dept.innerHTML = "Department";
    const eaches = Header.insertCell();
    eaches.innerHTML = "Ticket Eaches";
    const hours = Header.insertCell();
    hours.innerHTML = "Hours";

  const Kids = table.insertRow();
    const kidsLabel = Kids.insertCell();
    kidsLabel.innerHTML = "Kids";
    const kidsData = Kids.insertCell();
    const kidsSum = (totals['NIT APPAREL'] + totals['KIDS APPAREL']);
    kidsData.innerHTML = kidsSum;
    const kidsHours = Kids.insertCell();
    kidsHours.innerHTML = +(kidsSum / 120).toPrecision(4);
  const RTW = table.insertRow();
    const rtwLabel = RTW.insertCell();
    rtwLabel.innerHTML = "RTW";
    const rtwData = RTW.insertCell();
    const rtwSum = (totals['READY-TO-WEAR'] + totals['SWIM'] + totals['YOUNG CONTEMPORARY']);
    rtwData.innerHTML = rtwSum;
    const rtwHours = RTW.insertCell();
    rtwHours.innerHTML = +(rtwSum / 120).toPrecision(4);
  const IHP = table.insertRow();
    const ihpLabel = IHP.insertCell();
    ihpLabel.innerHTML = "IHP";
    const ihpData = IHP.insertCell();
    const ihpSum = (totals['JEWELRY/ACCESS'] + totals['INT/HOS/SLEEP'] + totals['PERFORMANCE']);
    ihpData.innerHTML = ihpSum;
    const ihpHours = IHP.insertCell();
    ihpHours.innerHTML = +(ihpSum / 120).toPrecision(4);
  const Shoes = table.insertRow();
    const shoesLabel = Shoes.insertCell();
    shoesLabel.innerHTML = "Shoes";
    const shoesSum = totals['SHOES'];
    const shoesData = Shoes.insertCell();
    shoesData.innerHTML = shoesSum;
    const shoesHours = Shoes.insertCell();
    shoesHours.innerHTML = +(shoesSum / 120).toPrecision(4);
  const Mens = table.insertRow();
    const mensLabel = Mens.insertCell();
    mensLabel.innerHTML = "Mens";
    const mensSum = totals['MENS'];
    const mensData = Mens.insertCell();
    mensData.innerHTML = mensSum;
    const mensHours = Mens.insertCell();
    mensHours.innerHTML = +(mensSum / 120).toPrecision(4);
  const Baby = table.insertRow();
    const babyLabel = Baby.insertCell();
    babyLabel.innerHTML = "Baby";
    const babySum = totals['BABY'];
    const babyData = Baby.insertCell();
    babyData.innerHTML = babySum;
    const babyHours = Baby.insertCell();
    babyHours.innerHTML = +(babySum / 120).toPrecision(4);
  const Electronics = table.insertRow();
    const elecLabel = Electronics.insertCell();
    elecLabel.innerHTML = "Electronics";
    const elecSum = totals['ENTERTAINMENT'] + totals['HOME ELECTRONICS'] + totals['MOBILE/SERVICES'];
    const elecData = Electronics.insertCell();
    elecData.innerHTML = elecSum;
    const elecHours = Electronics.insertCell();
    elecHours.innerHTML = +(elecSum / 120).toPrecision(4);
  const Toys = table.insertRow();
    const toysLabel = Toys.insertCell();
    toysLabel.innerHTML = "Toys";
    const toysSum = totals['TOYS'];
    const toysData = Toys.insertCell();
    toysData.innerHTML = toysSum;
    const toysHours = Toys.insertCell();
    toysHours.innerHTML = +(toysSum / 120).toPrecision(4);
  const Sport = table.insertRow();
    const sportLabel = Sport.insertCell();
    sportLabel.innerHTML = "Sporting Goods";
    const sportSum = totals['SPORTING GOODS'];
    const sportData = Sport.insertCell();
    sportData.innerHTML = sportSum;
    const sportHours = Sport.insertCell();
    sportHours.innerHTML = +(sportSum / 120).toPrecision(4);
  const Seasonal = table.insertRow();
    const seasLabel = Seasonal.insertCell();
    seasLabel.innerHTML = "Seasonal";
    const seasSum = totals['SEASNL/OUTDR LIVING'];
    const seasData = Seasonal.insertCell();
    seasData.innerHTML = seasSum;
    const seasHours = Seasonal.insertCell();
    seasHours.innerHTML = +(seasSum / 120).toPrecision(4);
  const Domestics = table.insertRow();
    const domLabel = Domestics.insertCell();
    domLabel.innerHTML = "Domestics/Dec. Home";
    const domSum = totals['DOMESTICS'] + totals['DECORATIVE HOME'];
    const domData = Domestics.insertCell();
    domData.innerHTML = domSum;
    const domHours = Domestics.insertCell();
    domHours.innerHTML = +(domSum / 120).toPrecision(4);
  const Storage = table.insertRow();
    const storageLabel = Storage.insertCell();
    storageLabel.innerHTML = "Home Storage";
    const storageSum = totals['STORAGE/UTILITY'];
    const storageData = Storage.insertCell();
    storageData.innerHTML = storageSum;
    const storageHours = Storage.insertCell();
    storageHours.innerHTML = +(storageSum / 120).toPrecision(4);
  const B = table.insertRow();
    const bLabel = B.insertCell();
    bLabel.innerHTML = "Office/Stat/Kitchen";
    const bSum = totals['STATIONERY'] + totals['KITCHEN'];
    const bData = B.insertCell();
    bData.innerHTML = bSum;
    const bHours = B.insertCell();
    bHours.innerHTML = +(bSum / 120).toPrecision(4);
  const Chem = table.insertRow();
    const chemLabel = Chem.insertCell();
    chemLabel.innerHTML = "Paper/Chem";
    const chemSum = totals['HSHLD/PAPR'];
    const chemData = Chem.insertCell();
    chemData.innerHTML = chemSum;
    const chemHours = Chem.insertCell();
    chemHours.innerHTML = +(chemSum / 120).toPrecision(4);
  const Pets = table.insertRow();
    const petsLabel = Pets.insertCell();
    petsLabel.innerHTML = "Pets";
    const petsSum = totals['PETS'];
    const petsData = Pets.insertCell();
    petsData.innerHTML = petsSum;
    const petsHours = Pets.insertCell();
    petsHours.innerHTML = +(petsSum / 120).toPrecision(4);
  const HBA = table.insertRow();
    const hbaLabel = HBA.insertCell();
    hbaLabel.innerHTML = "HBA/Pharmacy";
    const hbaSum = totals['BEAUTY'] + totals['OTC'];
    const hbaData = HBA.insertCell();
    hbaData.innerHTML = hbaSum;
    const hbaHours = HBA.insertCell();
    hbaHours.innerHTML = +(hbaSum / 120).toPrecision(4);
  const Beauty = table.insertRow();
    const beautyLabel = Beauty.insertCell();
    beautyLabel.innerHTML = "Beauty";
    const beautySum = totals['COSMETICS'];
    const beautyData = Beauty.insertCell();
    beautyData.innerHTML = beautySum;
    const beautyHours = Beauty.insertCell();
    beautyHours.innerHTML = +(beautySum / 120).toPrecision(4);
  const Grocery = table.insertRow();
    const groceryLabel = Grocery.insertCell();
    groceryLabel.innerHTML = "Grocery";
    const grocerySum = totals['DRY GROCERY'] + totals['SNACKS/BEV/CANDY'] + totals['ADULT BEVERAGES'] + totals['MEAT'] + totals['DAIRY/FROZEN']
    const groceryData = Grocery.insertCell();
    groceryData.innerHTML = grocerySum;
    const groceryHours = Grocery.insertCell();
    groceryHours.innerHTML = +(grocerySum / 120).toPrecision(4);
  const Total = table.insertRow();
    Total.id = "total-row"
    const totalLabel = Total.insertCell();
    totalLabel.innerHTML = "Total";
    const indexes = Array.from(Object.keys(totals));
    let totalSum = 0;
    for (let i = 0; i < indexes.length; i++) {
      totalSum += totals[indexes[i]];
    }
    const totalData = Total.insertCell();
    totalData.innerHTML = totalSum;
    const totalHours = Total.insertCell();
    totalHours.innerHTML = +(totalSum / 120).toPrecision(5);

  document.getElementById('table-data').appendChild(table);
}

const totals = {
  'BABY': 0, //done
  'ENTERTAINMENT': 0, //done
  'HOME ELECTRONICS': 0,  //done
  'KIDS APPAREL': 0, //done
  'MOBILE/SERVICES': 0, //done
  'NIT APPAREL': 0,  //done
  'PERFORMANCE': 0, //done
  'READY-TO-WEAR': 0,  //done
  'SWIM': 0,  //done
  'YOUNG CONTEMPORARY': 0, //done
  'ADULT BEVERAGES': 0, //done
  'BEAUTY': 0,  //done
  'DAIRY/FROZEN': 0, //done
  'DRY GROCERY': 0, //done
  'HSHLD/PAPR': 0, //done
  'MEAT': 0, //done
  'MENS': 0, //done
  'OTC': 0,  //done
  'PETS': 0,  //done
  'SEASNL/OUTDR LIVING': 0, //done
  'SNACKS/BEV/CANDY': 0, //done
  'STATIONERY': 0, //done
  'DECORATIVE HOME': 0, //done
  'INT/HOS/SLEEP': 0, //done
  'KITCHEN': 0, //done
  'SHOES': 0, //done
  'SPORTING GOODS': 0, //done
  'TOYS': 0, //done
  'COSMETICS': 0, //done
  'DOMESTICS': 0, //done
  'JEWELRY/ACCESS': 0, //done
  'STORAGE/UTILITY': 0 //done
};

const departments = [
  'BABY',
  'ENTERTAINMENT',
  'HOME ELECTRONICS',
  'KIDS APPAREL',
  'MOBILE/SERVICES',
  'NIT APPAREL',
  'PERFORMANCE',
  'READY-TO-WEAR',
  'SWIM',
  'YOUNG CONTEMPORARY',
  'ADULT BEVERAGES',
  'BEAUTY',
  'DAIRY/FROZEN',
  'DRY GROCERY',
  'HSHLD/PAPR',
  'MEAT',
  'MENS',
  'OTC',
  'PERFORMANCE',
  'PETS',
  'SEASNL/OUTDR LIVING',
  'SNACKS/BEV/CANDY',
  'STATIONERY',
  'DECORATIVE HOME',
  'INT/HOS/SLEEP',
  'KITCHEN',
  'PERFORMANCE',
  'SHOES',
  'SPORTING GOODS',
  'TOYS',
  'COSMETICS',
  'DECORATIVE HOME',
  'DOMESTICS',
  'JEWELRY/ACCESS',
  'STORAGE/UTILITY'
];