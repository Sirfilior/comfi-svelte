export function getActiveRoomUrl(pathname: string) {
  if (pathname.includes('stash') || pathname.includes('shop')) return pathname.split('/')[2];
  return pathname.split('/')[1] || 'livingroom';
}
