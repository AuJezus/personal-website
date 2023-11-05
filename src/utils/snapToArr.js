export default function snapToArr(snap) {
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
