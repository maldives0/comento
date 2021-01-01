

module.exports = () => {
    const data = {
        list: [],
        ads: [],
        view: [],
        category: [],
    }

    for (let i = 0; i < 31; i++) {
        data.list.push({
            id: i,
            key: 'post',
            title: `Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title`,
            content: "contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents",
            category: [{
                id: 1,
                name: `category_name`,
            }]
        });

        data.ads.push({
            id: i * 100,
            key: 'ad',
            title: `AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost AdPost`,
            content: "contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents",
            src: `https://cdn.comento.kr/assignment/img_${i}.png`
        });
        data.view.push({
            id: i,
            title: `Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title`,
            content: "contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents",
            category: [{
                id: 1,
                name: `category_name`,
            }]
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

