

module.exports = () => {
    const data = {

        list: [],
        ads: [],
        view: [],
        category: [],
        search: [],
    }
    let date = new Date();
    for (let i = 0; i < 31; i++) {
        data.list.push({
            id: i,
            key: 'post',
            user_id: `user_${i}@gmail.com`,
            title: `Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title`,
            content: "contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents",
            category: [{
                id: 1,
                name: `category_name`,
            }],
            created_at: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        });
        data.search.push({
            id: i,
            key: 'post',
            user_id: `user_${i}@gmail.com`,
            title: `search Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title`,
            content: "contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents",
            category: [{
                id: 1,
                name: `category_name`,
            }],
            created_at: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        });

        data.ads.push({
            id: (i + 1) * 1000,
            key: 'ad',
            title: `AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost`,
            content: "contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents",
            src: process.env.NODE_ENV === 'production' ? `https://cdn.comento.kr/assignment/img_${i}.png` : 'http://localhost:8080/public/comento.jpg',
        });
        data.view.push({
            id: i,
            user_id: `user_${i}@gmail.com`,
            title: `Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title`,
            content: "contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents",
            category: [{
                id: 1,
                name: `category_name`,
            }],
            created_at: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        });

    }
    for (let i = 0; i < 3; i++) {
        data.category.push({
            id: i,
            name: `category_${i}`
        });
    }
    return data
}

