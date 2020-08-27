

let data = [
    {
        'courseId': 1,
        'courseTitle': 'Web Development',
        'price': 50,
        'image':'https://img.techpowerup.org/200827/web-development.png'
    },
    {
        'courseId': 2,
        'courseTitle': 'Frontend Development',
        'price': 30,
        'image':'https://img.techpowerup.org/200827/frontend.jpg'
    },
    {
        'courseId': 3,
        'courseTitle': 'Backend Development',
        'price': 40,
        'image':'https://img.techpowerup.org/200827/backend956.jpg'
    },
    {
        'courseId': 4,
        'courseTitle': 'Data Scientist',
        'price': 80,
        'image':'https://img.techpowerup.org/200827/data-science.png'
    },
    {
        'courseId': 5,
        'courseTitle': 'Data Analyst',
        'price': 65,
        'image':'https://img.techpowerup.org/200827/data-analyst.jpg'
    },
    {
        'courseId': 6,
        'courseTitle': 'Android Development',
        'price': 60,
        'image':'https://img.techpowerup.org/200827/android.jpg'
    },
    {
        'courseId': 7,
        'courseTitle': 'iOS Development',
        'price': 60,
        'image':'https://img.techpowerup.org/200827/ios-app.jpg'
    },
    {
        'courseId': 8,
        'courseTitle': 'Objective in Java',
        'price': 50,
        'image':'https://img.techpowerup.org/200827/javadevelopment.jpg'
    },
    {
        'courseId': 9,
        'courseTitle': 'Swift Programming',
        'price': 60,
        'image':'https://img.techpowerup.org/200827/swift-1.png'
    },
    {
        'courseId': 10,
        'courseTitle': 'Laravel Development',
        'price': 40,
        'image':'https://img.techpowerup.org/200827/laravel.png'
    },
    {
        'courseId': 11,
        'courseTitle': 'React Js Development',
        'price': 60,
        'image':'https://img.techpowerup.org/200827/reactjs.jpg'
    },
    {
        'courseId': 12,
        'courseTitle': 'JavaScript Development',
        'price': 45,
        'image':'https://img.techpowerup.org/200827/javascript.jpg'
    },
]


    let shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    const fakeData = [...data]

    shuffle(fakeData);

    export default fakeData




