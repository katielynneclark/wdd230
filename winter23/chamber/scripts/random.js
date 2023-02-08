function getSpotlightMembers(members) {
    const qualifiedMembers = members.filter(member => {
        return member.level === "silver" || member.level === "gold";
    });

    const numberOfMembersToDisplay = Math.floor(Math.random() *2) + 2;
    const randomlySelectedMembers = [];
    for (let i = 0; i < numberOfMembersToDisplay; i++) {
        const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
        randomlySelectedMembers.push(qualifiedMembers[randomIndex]);
    }

    return randomlySelectedMembers;
}