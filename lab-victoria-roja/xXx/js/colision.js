function hit(a, b) {
    var hit = false;
    if (b.x + b.width >= a.x && b.x < a.x + a.width) {
        if (b.y + b.height >= a.y && b.y < a.y + a.height) {
            hit = true;
        }
    }
    if (b.x <= a.x && b.x + b.width >= a.x + a.width) {
        if (b.y <= a.y && b.y + b.height >= a.y + a.height) {
            hit = true;
        }
    }
    if (a.x <= b.x && a.x + a.width >= b.x + b.width) {
        if (a.y <= b.y && a.y + a.height >= b.y + b.height) {
            hit = true;
        }
    }
    return hit;
}