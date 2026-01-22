function handleCoinAnimation(tile) {
    const tileRect = canvas.getBoundingClientRect();
    const tileX = tileRect.left + (tile.x + 0.5) * TILE_SIZE * (tileRect.width / canvas.width);
    const tileY = tileRect.top + (tile.y + 0.5) * TILE_SIZE * (tileRect.height / canvas.height);

    animateCoinCollection(tileX, tileY, 1);
}