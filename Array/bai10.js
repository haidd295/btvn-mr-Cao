const array = [
    {
        'CHb5591f5db2a546d3af':
            [
                { animal: 'Cat', name: 'Tom' },
                { animal: 'Dog', name: 'Bruno' }
            ]
    },
    {
        'CH5e86016c8b894d9d87':
            [
                { animal: 'Alligator', name: 'Mike' }
            ]
    },
    {
        'CH5e86016c8b894d9d97':
            undefined
    }
]

const reducer = function (acc, item) {
    for (const _key in item) {
        acc.push({
            'id': _key,
            'content': item[_key]
        })
    }
    return acc;
}
console.log(array.reduce(reducer, []))