export const assignRoleToUser = async (user, roleId) => {
    if (!user.guild.roles.cache.has(roleId)) {
        throw new Error(`Role with ID "${roleId}" not found.`);
    }
    if (user.roles.cache.has(roleId)) {
        return false;
    }
    await user.roles.add(roleId);
    return true;
};

export const removeRoleFromUser = async (user, roleId) => {
    if (!user.roles.cache.has(roleId)) {
        return false;
    }

    await user.roles.remove(roleId);
    return true;
};

export const changeRoleColor = async (role, color) => {
    // change the color of the role
    await role.setColor(color);
}