export function getInitialsFromName(name: string): string {
  let initials = ''

  if (name?.trim()) {
    const names = name.trim().split(/\s+/)
    if (names.length > 0) {
      initials = (names[0][0] + names[names.length - 1][0]).toUpperCase()
    }
  }

  return initials
}
