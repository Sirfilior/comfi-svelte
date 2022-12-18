export function getActiveRoomUrl(pathname: string) {
  if (pathname.includes('stash') || pathname.includes('shop')) return pathname.split('/')[2];
  return pathname.split('/')[1] || 'livingroom';
}

export function isNightmode() {
  const today = new Date();
  const hours = today.getHours();
  return hours > 15 || hours < 6;
}
