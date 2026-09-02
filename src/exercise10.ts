type UserAccount = {
    id: string;
    createdAt: Date;
    email: string;
    passwordHash: string;
    profile: {
        bio: string;
        avatarUrl: string;
    }
};

export class UserRegistry {
  private users: Map<string, UserAccount> = new Map();

  public registerUser(
    data: Omit<UserAccount, 'id' | 'createdAt'>,
  ): UserAccount {
    const newUser: UserAccount = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date(),
    };
    this.users.set(newUser.id, newUser);
    return newUser;
  }

  public getUserView(
    id: string,
  ): Readonly<Pick<UserAccount, 'id' | 'email' | 'profile'>> | undefined {
    const user = this.users.get(id);
    if (!user) {
        return undefined;
    }
    return Object.freeze({
        id: user.id,
        email: user.email,
        profile: user.profile,
    });
  }
}
