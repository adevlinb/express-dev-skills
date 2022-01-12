const skills = [
    { id: 125223, skill: 'HTML', has: true },
    { id: 127904, skill: 'NODE', has: false },
    { id: 139608, skill: 'EXPRESS', has: false }
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}