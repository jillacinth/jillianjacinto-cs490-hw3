export const standard = defineScenario({
  user: {
    one: {
      data: {
        id: 1,
        name: null,
        email: 'admin@admin.com',
        hashedPassword: 'String',
        salt: 'String',
        resetToken: null,
        resetTokenExpiresAt: null,
        roles: 'admin',
      },
    },

    two: {
      data: {
        id: 2,
        name: null,
        email: 'mod@mod.com',
        hashedPassword: 'String',
        salt: 'String',
        resetToken: null,
        resetTokenExpiresAt: null,
        roles: 'moderator',
      },
    },
  },
})
