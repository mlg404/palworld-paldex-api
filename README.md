<h1 align="center">
  <img alt="Palworld Paldex" title="Palworld Paldex" src=".github/pal.png" width="200px" />
</h1>

<h3 align="center">
  Palworld Paldex API
</h3>
<h6 align="center"><i>First Palworld API</i></h6>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mlg404/palworld-paldex-api.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mlg404/palworld-paldex-api.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/mlg404/palworld-paldex-api.svg">
  <a href="https://github.com/mlg404/palworld-paldex-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mlg404/palworld-paldex-api.svg">
  </a>

  <a href="https://github.com/mlg404/palworld-paldex-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/mlg404/palworld-paldex-api.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/mlg404/palworld-paldex-api.svg">
</p>
<p align="center"><a href="https://www.buymeacoffee.com/mlg404"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=mlg404&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" /></a></p>

<p align="center">
  <a href="#rocket-info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to">How to</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mag_right-functionalities">Functionalities</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#busts_in_silhouette-contribute">Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Info

This is the first Palworld API, it's a simple API to get all Palworld Paldex data.

<details>
  <summary>This is what final data looks like</summary>

```json
{
  "content": [
    {
      "id": 85,
      "key": "085",
      "image": "/public/images/paldeck/085.png",
      "name": "Relaxaurus",
      "wiki": "https://palworld.fandom.com/wiki/Relaxaurus",
      "types": ["dragon", "water"],
      "imageWiki": "https://static.wikia.nocookie.net/palworld/images/0/01/Relaxaurus_menu.png/",
      "suitability": [
        {
          "type": "watering",
          "image": "/public/images/works/watering.png",
          "level": 2
        },
        {
          "type": "transporting",
          "image": "/public/images/works/transporting.png",
          "level": 1
        }
      ],
      "drops": ["high_quality_pal_oil", "ruby"],
      "aura": {
        "name": "hungry_missile",
        "description": "Can be ridden. Can rapidly fire a missile launcher while mounted.",
        "tech": null
      },
      "description": "Contrary to its blasé appearance, it's quite ferocious.\nIt perceives everything in its sight as prey and will stop at nothing to devour it.",
      "skills": [
        {
          "level": 1,
          "name": "dragon_cannon",
          "type": "dragon",
          "cooldown": 2,
          "power": 30,
          "description": "Hurls an energy ball imbued with draconic energy at an enemy.\n"
        },
        {
          "level": 7,
          "name": "aqua_gun",
          "type": "water",
          "cooldown": 4,
          "power": 40,
          "description": "Hurls a ball of water straight at an enemy.\n"
        },
        {
          "level": 15,
          "name": "dragon_burst",
          "type": "dragon",
          "cooldown": 10,
          "power": 55,
          "description": "Quickly discharges draconic energy, damaging those around it.\n"
        },
        {
          "level": 22,
          "name": "bubble_blast",
          "type": "water",
          "cooldown": 13,
          "power": 65,
          "description": "Fires numerous bubbles that slowly pursue an enemy.\n"
        },
        {
          "level": 30,
          "name": "draconic_breath",
          "type": "dragon",
          "cooldown": 15,
          "power": 70,
          "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.\n"
        },
        {
          "level": 40,
          "name": "aqua_burst",
          "type": "water",
          "cooldown": 30,
          "power": 100,
          "description": "Creates a giant ball of water and hurls it at an enemy.\n"
        },
        {
          "level": 50,
          "name": "dragon_meteor",
          "type": "dragon",
          "cooldown": 55,
          "power": 150,
          "description": "Calls down numerous small meteorites and launches them at an enemy.\n"
        }
      ],
      "stats": {
        "hp": 110,
        "attack": {
          "melee": 110,
          "ranged": 100
        },
        "defense": 70,
        "speed": {
          "ride": 800,
          "run": 650,
          "walk": 60
        },
        "stamina": 100,
        "support": 100
      },
      "asset": "LazyDragon",
      "genus": "monster",
      "rarity": 8,
      "price": 10240,
      "size": "xl",
      "breeding": {
        "rank": 280,
        "order": 54,
        "child_eligble": true,
        "male_probability": 50.0
      }
    }
  ],
  "page": 1,
  "limit": 10,
  "count": 1,
  "total": 1
}
```

</details>

## :family: Breeding

The `breeding.rank` can be used to calculate the children for two parents:

$$ \text{Child Rank} = \lfloor \frac{\text{ParentA Rank} + \text{ParentB Rank} + 1}{2} \rfloor $$

> "The game will then pick the Pal with the closest power to that average. [...] The 'tie breaker' (since 1015 is equal distance between 1010 and 1020) just comes down to the which Pal [has the lower `breeding.order` number].
>
> ~ https://palworld.fandom.com/wiki/Breeding

For example, if you have _Penkin_ (Breed Power = `520`) and breed it with _Vanwyrm Cryst_ (Breed Power = `620`) you get a child with a Breed Power of `570`:

$$ \text{Child Rank} = \lfloor \frac{520 + 620 + 1}{2} \rfloor = 570 $$

The pal with the nearest distance to 570 is Anubis, so if you breed _Penkin_ with _Vanwym Cryst_ you'd get Anubis.
Some pals can only be bred if their parents are both of the type of the offspring. This is marked by the `breeding.child_eligble` flag.

<details>
<summary>There are a few special cases, however:</summary>

```py
    # Relaxaurus + Sparkit = Relaxaurus Lux
    "085+007": "085B",
    # Arsox + Broncherry = Kitsun
    "042+086": "061",
    # Direhowl + Gumoss = Maraith
    "026+013": "066",
    # Jormuntide + Shadowbeak = Helzephyr
    "101+107": "097",
    # Helzephyr + Shadowbeak = Cryolinx
    "097+107": "083",
    # Suzaku + Relaxaurus = Astegon
    "102+085": "098",
    # Penking + Bushi = Anubis
    "011+072": "100",
    # Incineram + Maraith = Incineram Noct
    "040+066": "040B",
    # Mau + Pengullet = Mau Cryst
    "024+010": "024B",
    # Vanwyrm + Foxcicle = Vanwyrm Cryst
    "071+057": "071B",
    # Eikthyrdeer + Hangyu = Eikthyrdeer Terra
    "037+032": "037B",
    # Elphidran + Surfent = Elphidran Aqua
    "080+065": "080B",
    # Pyrin + Katress = Pyrin Noct
    "058+075": "058B",
    # Mammorest + Wumpo = Mammorest Cryst
    "090+091": "090B",
    # Mossanda + Grizzbolt = Mossanda Lux
    "033+103": "033B",
    # Dinossom + Rayhound = Dinossom Lux
    "064+060": "064B",
    # Jolthog + Pengullet = Jolthog Cryst
    "012+010": "012B",
    # Frostallion + Helzephyr = Frostallion Noct
    "110+097": "110B",
    # Kingpaca + Reindrix = Kingpaca Cryst
    "089+059": "089B",
    # Lyleen + Menasting = Lyleen Noct
    "104+099": "104B",
    # Leezpunk + Flambelle = Leezpunk Ignis
    "045+070": "045B",
    # Blazehowl + Felbat = Blazehowl Noct
    "084+094": "084B",
    # Robinquill + Fuddler = Robinquill Terra
    "048+022": "048B",
    # Broncherry + Fuack = Broncherry Aqua
    "086+006": "086B",
    # Surfent + Dumud = Surfent Terra
    "065+043": "065B",
    # Gobfin + Rooby = Gobfin Ignis
    "031+009": "031B",
    # Suzaku + Jormuntide = Suzaku Aqua
    "102+101": "102B",
    # Reptyro + Foxcicle = Reptyro Cryst
    "088+057": "088B",
    # Hangyu + Swee = Hangyu Cryst
    "032+053": "032B",
    # Mossanda + Petallia = Lyleen
    "033+087": "104",
    # Vanwyrm + Anubis = Faleris
    "071+100": "105",
    # Mossanda + Rayhound = Grizzbolt
    "033+060": "103",
    # Grizzbolt + Relaxaurus = Orserk
    "103+085": "106",
    # Kitsun + Astegon = Shadowbeak
    "061+098": "107",
    # Bushi + Arsox = Blazehowl
    "072+042": "084",
```

</details>

The breeding power data was taken from [@dini.rfl's Google Docs Sheet](https://docs.google.com/spreadsheets/u/1/d/1YgPc11dgdBUC8jXNp01b7gI6jNHoBRQGwrY_V6lXMgQ/htmlview?usp=sharing)

## :computer: Technologies

This project was developed following this technologies:

- [bun](https://bun.sh/)
- [Prettier](https://prettier.io/)
- [ElysiaJS](https://elysiajs.com/)
- [VS Code][vc]
- [Typescript](https://www.typescriptlang.org/)
- [elasticlunr](https://github.com/weixsong/elasticlunr.js)

## :information_source: How To

To clone this application you will need [Git](https://git-scm.com) + [bun](https://bun.sh/). Run in terminal:

```bash
##### Clone this repo #####

# https
$ git clone https://github.com/mlg404/palworld-paldex-api.git

# ssh
$ git clone git@github.com:mlg404/palworld-paldex-api.git

##### Access this repo #####
$ cd palworld-paldex-api

##### Install dependencies #####
$ bun install

##### Run the application #####
$ bun start
```

You also can run it easily with Docker:

```bash
docker-compose up
```

After that, just choose your favorite API client and make a request to `http://localhost:3000`.

You can pass some query params to the request, like `http://localhost:3000?page=1&limit=10&name=Relaxaurus`.

All query params are optional, but you can use them to filter the results.

| Param       | Type   | Description                                           |
| ----------- | ------ | ----------------------------------------------------- |
| page        | number | The page number you want to get. Default is 1.        |
| limit       | number | The number of results you want to get. Default is 10. |
| name        | string | The name of the Pal you want to get.                  |
| types       | string | The type of the Pal you want to get.                  |
| suitability | string | The suitability of the Pal you want to get.           |
| drops       | string | The drop of the Pal you want to get.                  |
| key         | string | The key of the Pal you want to get.                   |
| **term\***  | string | The term you want to search.                          |

\***_This api provides full text search with Elasticlunr, so you can search for any term in the Palworld Paldex._**

## :mag_right: Functionalities

See the current features!

- ElysiaJS for fast and easy API development;
- Elasticlunr for fast and easy full text search;
- useCase's structure for better code organization;
- typescript for better code quality;
- typesafety for better code quality;
- Docker

## :stars: Upcoming features

- Error handling
- Eslint and Prettier
- Tests

## :test_tube: Testing

Testing is a crucial part of maintaining the quality and reliability of the Palworld Paldex API. This section explains how to run the tests and provides a brief overview of the testing setup.

### Running the Tests

To ensure that the API functions as expected, follow these steps to run the tests:

```bash
$ bun test
```

This will run all the automated tests and display the results.

### Types of Tests (WIP)

The testing suite includes the following types of tests:

- **Unit Tests**: These tests cover individual functions and components to ensure they behave as expected in isolation.

### Test Coverage

We aim to cover as much of the codebase as possible with our tests to maintain high standards of quality and reliability. Test coverage metrics are regularly updated and can be viewed in the test reports.

### Continuous Integration

WIP

### Contributing to Tests

Contributions to improve or add tests are always welcome. If you're interested in contributing, please follow the guidelines in the [Contribute](#busts_in_silhouette-contribute) section.

## :busts_in_silhouette: Contribute

- Fork this repository;
- Create one branch with your feature: `git checkout -b my-feature`;
- Commit your alterations: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

Open a pull request with your branch. After pull request merge, you should delete your branch.
<br />

## :memo: License

This project is under MIT license. See [LICENSE](https://github.com/mlg404/palworld-paldex-api/blob/master/LICENSE) for more information.

---

Made with 💙 by Victor Eyer :wave: [Get in touch!](https://www.linkedin.com/in/victoreyer/)

[vc]: https://code.visualstudio.com/

This project was created using `bun init` in bun v1.0.25. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## :wrench: Projects that make use of palworld-paldex-api

- [Paldex - is a Kotlin Multiplatform app (KMM) built with Compose Multiplatform to retrieve Palworld game information](https://github.com/viethua99/Paldex)
- [Discord Bot Using this API](https://github.com/nibalizer/palbot-rs/)
- [Mobile APP - PalPad](https://github.com/Juanvic/PalPad)
