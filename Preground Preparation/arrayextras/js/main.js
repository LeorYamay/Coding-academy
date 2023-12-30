
function init() {
    // ex1();
    // ex2();
    // ex3();
    // ex4();
    // exMovies();
    // exeverysome();
    // exReduce();
}
function ex1() {
    console.log("ex1");
    function onlyOneWord(input) {
        return input.filter((phrase) => { return !phrase.includes(" ") })
    }
    var input = ['return', 'phrases', 'with one word'];
    var expected = ['return', 'phrases']
    var actual = onlyOneWord(input)
    console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);

}

function ex2() {
    console.log("ex2");
    function revereseString(string) {
        return string.split('').reverse().join('');
    }
    function reverseAll(strings) {
        return strings.map((string) => revereseString(string));
    }
    var input = ['abc', 'xyz'];
    var expected = ['cba', 'zyx']
    var actual = reverseAll(input)
    console.log("input ['abc', 'xyz'], expected ['cba', 'zyx'], actual", actual);
}



function ex3() {
    console.log("ex3")
    function capitalizeLongerThan5(input) {
        return input.map((string) => {
            if (string.length > 5) {
                string = capitalizeFirstChar(string)
            }
            return string;
        })
    }
    function capitalizeFirstChar(string) {
        return (string.charAt(0).toUpperCase() + string.slice(1));
    }
    var input = ['abcdefg', 'xyz'];
    var expected = ['Abcdefg', 'xyz']
    var actual = capitalizeLongerThan5(input)
    console.log("input = ['abcdefg', 'xyz'], expected = ['Abcdefg', 'xyz'], actual ", capitalizeLongerThan5(input))
}


function ex4() {
    console.log("ex4")
    function onlyVowels(input) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        return input.map((string) => {
            return string.split('').filter((letter) => { return vowels.includes(letter) }).join('');
        })
    }
    var input = ['average', 'exceptional', 'amazing'];
    var expected = ['aeae', 'eeioa', 'aai']
    var actual = onlyVowels(input)
    console.log("input = ['average', 'exceptional', 'amazing'], expected = ['aeae', 'eeioa', 'aai'], actual ", onlyVowels(input))
}

function exMovies() {
    console.log("exMovies");
    var gMovies = [
        { imdb: 'tt0373889', name: 'Harry Potter', rate: 17 },
        { imdb: 'tt0000004', name: 'Un bon bock', rate: 20 },
        { imdb: 'tt0000003', name: 'Pauvre Pierrot', rate: 15 },
    ]
    function getMovieLink(imdb) {
        const movie = gMovies.find((movie) => movie.imdb === imdb);
        if (movie) {
            return `<a href="https://www.imdb.com/title/${imdb}/">,${movie.name}</a>`;
        }
        else { return 'movie not found'; }
    }
    function deleteMovie(imdb) {
        const index = gMovies.findIndex((movie) => movie.imdb === imdb);
        if (index >= 0) {
            gMovies.splice(index, 1);
            console.log(`deleted ${imdb}`)
        }
        else {
            console.log(`could not find ${imdb}`)
        }
    }
    function sortByName(input) {
        return input.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });
    }
    function sortByRate(input) {
        return input.sort((a, b) => a.rate - b.rate)
    }
    let sortedByName = sortByName(gMovies).slice();
    let sortedByrate = sortByRate(gMovies).slice();
    console.log("sortedByName = sortByName(gMovies) ", sortedByName);
    console.log("sortedByName = sortByRate(gMovies) ", sortedByrate);
    console.log("getMovieLink('tt0373889') ", getMovieLink('tt0373889'));
    deleteMovie('tt0373889');
    console.log("getMovieLink('tt0373889') ", getMovieLink('tt0373889'));

}

function exeverysome() {
    function allPassed(students) {
        return students.every((student) => student.grade >= 70);
    }
    function isGameOn(players) {
        return players.some((player) => player.isAlive);
    }
    function isMatrix(arr2d) {
        if (arr2d.length <= 0) {
            return false;
        }
        const desiredRowLength = arr2d[0].length;
        return arr2d.every((row) => row.length === desiredRowLength);
    }
}

function exReduce() {
    var emps = [
        {
            name: 'Joe Schmoe',
            yearsExperience: 5,
            department: 'IT'
        },
        {
            name: 'Sally Sallerson',
            yearsExperience: 15,
            department: 'Engineering'
        },
        {
            name: 'Bill Billson',
            yearsExperience: 5,
            department: 'Engineering'
        },
        {
            name: 'Jane Janet',
            yearsExperience: 15,
            department: 'Management'
        },
        {
            name: 'Bob Hope',
            yearsExperience: 9,
            department: 'IT'
        }
    ];
    var sumOfExperience = emps.reduce((acc, employ) => {
        return acc + employ.yearsExperience;
    }, 0)
    var sumOfExperienceByDepartment = emps.reduce((acc, employ) => {
        if (!acc[employ.department]) {
            acc[employ.department] = 0;
        }
        acc[employ.department] += employ.yearsExperience;
        return acc;
    }, [])
    var employiesByExperience = emps.reduce((acc, employ) => {
        const indexToUpdate = acc.findIndex((group) => group.yearsExperience === employ.yearsExperience)
        if (indexToUpdate !== -1) {
            acc[indexToUpdate].employees.push(employ);
        }
        else {
            const object = { yearsExperience: employ.yearsExperience, employees: [employ] }
            acc.push(object);
        }
        return acc;
    }, [])
    var countEmployeesByDepartment = emps.reduce((acc, employ) => {
        if (!acc[employ.department]) {
            acc[employ.department] = 0;
        }
        acc[employ.department] += 1;
        return acc;
    }, [])
    console.log("sumOfExperience, ", sumOfExperience)
    console.log("sumOfExperienceByDepartment, ", sumOfExperienceByDepartment)
    console.log("EmployiesByExperience ", employiesByExperience)
    console.log("countEmployeesByDepartment ", countEmployeesByDepartment)
}

function findModes(values) {
    const freqList = values.reduce((acc, value) => {
        const indexToUpdate = acc.findIndex((number) => number.value === value)
        if (indexToUpdate !== -1) {
            acc[indexToUpdate].count += 1;
        }
        else {
            const object = { value: value, count: 1 };
            acc.push(object);
        }
        return acc;
    }, [])

    const maxFrequency = Math.max(freq.map(obj => obj.count));
    return freqList.filter(obj => obj.count >= maxFrequency).map(obj => obj.value);
}

function flatten(values) {
    return values.reduce((acc,value) => {
        if (Array.isArray(value)) {
            acc.push(...flatten(value))
        }
        else
        {
            acc.push(value)
        }
        return acc;
    },[])
}


