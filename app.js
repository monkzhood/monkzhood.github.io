/* =====================================================================
   MAINNET CONFIG lives in config.js (window.MINT_CONFIG).
   Edit config.js to change contract / RPCs / explorer — not this file.
   ===================================================================== */
const cfg = Object.assign({
  address: '',
  chainId: 4663,
  chainName: 'ROBINHOOD CHAIN',
  explorer: 'https://robinhoodchain.blockscout.com',
  ipfsGateway: 'https://ipfs.io/ipfs/',
  rpcs: [],
  rpcIndex: 0,
  get rpc() { return this.rpcs[this.rpcIndex] || this.rpcs[0] || ''; }
}, window.MINT_CONFIG || {});
if (!cfg.rpc || typeof cfg.rpc !== 'string') {
  Object.defineProperty(cfg, 'rpc', {
    get() { return this.rpcs[this.rpcIndex] || this.rpcs[0] || ''; },
    configurable: true
  });
}

const ABI = [
  {"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"components":[{"internalType":"uint256","name":"maxSupply","type":"uint256"},{"internalType":"uint256","name":"paidMintSupply","type":"uint256"},{"internalType":"uint256","name":"numFreeMints","type":"uint256"},{"internalType":"uint256","name":"cost","type":"uint256"},{"internalType":"uint8","name":"maxMintAmountPerTx","type":"uint8"},{"internalType":"uint8","name":"maxFreeMintAmountPerWallet","type":"uint8"},{"internalType":"uint256","name":"maxPaidMintAmountPerWallet","type":"uint256"},{"internalType":"uint256","name":"freeMintCooldown","type":"uint256"},{"internalType":"uint96","name":"royaltyBps","type":"uint96"},{"internalType":"address","name":"royaltyReceiver","type":"address"},{"internalType":"address","name":"payoutReceiver","type":"address"}],"internalType":"struct MonkzHood.Config","name":"cfg","type":"tuple"}],"stateMutability":"nonpayable","type":"constructor"},
  {"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},
  {"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},
  {"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},
  {"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},
  {"inputs":[],"name":"MintToZeroAddress","type":"error"},
  {"inputs":[],"name":"MintZeroQuantity","type":"error"},
  {"inputs":[],"name":"NotCompatibleWithSpotMints","type":"error"},
  {"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},
  {"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},
  {"inputs":[],"name":"SequentialMintExceedsLimit","type":"error"},
  {"inputs":[],"name":"SequentialUpToTooSmall","type":"error"},
  {"inputs":[],"name":"SpotMintTokenIdTooSmall","type":"error"},
  {"inputs":[],"name":"TokenAlreadyExists","type":"error"},
  {"inputs":[],"name":"TokenIdsNotStrictlyAscending","type":"error"},
  {"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},
  {"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},
  {"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},
  {"inputs":[],"name":"TransferToZeroAddress","type":"error"},
  {"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"prefix","type":"string"},{"indexed":false,"internalType":"string","name":"suffix","type":"string"}],"name":"TokenURIFrozen","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldValidator","type":"address"},{"indexed":false,"internalType":"address","name":"newValidator","type":"address"}],"name":"TransferValidatorUpdated","type":"event"},
  {"inputs":[],"name":"NUM_FREE_MINTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint16","name":"_mintAmount","type":"uint16"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"creatorReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"freeMintCooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freeMintsPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"freeNFTAlreadyMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"freezeTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getTransferValidationFunction","outputs":[{"internalType":"bytes4","name":"functionSignature","type":"bytes4"},{"internalType":"bool","name":"isViewFunction","type":"bool"}],"stateMutability":"pure","type":"function"},
  {"inputs":[],"name":"getTransferValidator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"lastFreeMintTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"maxFreeMintAmountPerWallet","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"maxMintAmountPerTx","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"maxPaidMintAmountPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[],"name":"mintFree","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"paidMintSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"paidMintsPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"paidNFTAlreadyMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"payoutReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"royaltyBps","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"royaltyReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint8","name":"_maxFreeMintAmountPerWallet","type":"uint8"}],"name":"setMaxFreeMintAmountPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"_numFreeMints","type":"uint256"}],"name":"setNumFreeMints","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"_paidMintSupply","type":"uint256"}],"name":"setPaidMintSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"_newPayoutReceiver","type":"address"}],"name":"setPayoutReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"_receiver","type":"address"},{"internalType":"uint96","name":"_bps","type":"uint96"}],"name":"setRoyalty","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"_validator","type":"address"}],"name":"setTransferValidator","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"_uriSuffix","type":"string"}],"name":"setUriSuffix","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"transferValidator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"uriFrozen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}
];

/* ------------------------- helpers ------------------------- */
const el = id => document.getElementById(id);
const fmtN = n => Number(n).toLocaleString('en-US');
const fmtE = v => ethers.formatEther(v);
const short = a => a ? a.slice(0,6) + '\u2026' + a.slice(-4) : '—';
const pad2 = n => String(n).padStart(2,'0');
const fmtCd = s => Math.floor(s/60) + ':' + pad2(Math.floor(s%60));
const fmtSeconds = n => { n = Number(n); return n + ' SECOND' + (n === 1 ? '' : 'S'); };
const explorerTx = h => cfg.explorer ? cfg.explorer.replace(/\/+$/,'') + '/tx/' + h : '';
const explorerAddr = a => cfg.explorer ? cfg.explorer.replace(/\/+$/,'') + '/address/' + a : '';

const I = {
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="9" y="9" width="12" height="12"/><path d="M5 15V4a1 1 0 0 1 1-1h10"/></svg>',
  ext:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 4h6v6M20 4 10 14M18 13v7H4V6h7"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 5l14 14M19 5 5 19"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="#1E8E4E" stroke-width="2.8"><path d="M4 12.5 10 18.5 20 6"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="#E33D0F" stroke-width="2.2"><path d="M12 3 2.5 20h19L12 3z"/><path d="M12 10v4.5M12 17.4v.2"/></svg>'
};
el('copyAddr').innerHTML = I.copy;

/* ------------------------- toasts / modals ------------------------- */
function toast(type, title, body, ms = 6000, link = '') {
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  const icon = type==='success' ? I.check : type==='error' ? I.alert : type==='pending' ? '<span class="spin"></span>' : '';
  t.innerHTML = `<span class="ticon">${icon}</span><div style="flex:1"><div class="tt">${title}</div><div class="tb">${body||''}</div>${link?`<a class="tlink" href="${link}" target="_blank" rel="noopener">VIEW ON EXPLORER</a>`:''}</div><button class="tx">${I.x}</button>`;
  el('toasts').appendChild(t);
  const kill = () => t.remove();
  t.querySelector('.tx').onclick = kill;
  if (ms > 0) setTimeout(kill, ms);
  return { el:t, kill };
}
function openModal(html){
  el('modalHost').innerHTML = `<div class="ovl"><div class="modal">${html}</div></div>`;
  el('modalHost').querySelector('.ovl').addEventListener('click', e => { if (e.target.classList.contains('ovl')) closeModal(); });
  el('modalHost').querySelectorAll('[data-close]').forEach(b => b.onclick = closeModal);
  return el('modalHost').querySelector('.modal');
}
function closeModal(){ el('modalHost').innerHTML = ''; }

/* ------------------------- artwork slideshow -------------------------
   Loads 1.png … 12.png from the same folder as this HTML file and
   scrolls them left → right in a seamless infinite loop.               */
function initGallery(){
  const track = el('mtrack'); if (!track) return;
  const buildGroup = () => {
    const g = document.createElement('div');
    g.className = 'mgroup';
    for (let i = 1; i <= 12; i++) {
      const img = new Image();
      img.src = i + '.png';
      img.alt = 'MONKZHOOD artwork ' + i;
      img.decoding = 'async';
      img.onerror = () => img.remove(); // skip missing files gracefully
      g.appendChild(img);
    }
    return g;
  };
  track.appendChild(buildGroup());
  track.appendChild(buildGroup()); // duplicate for the seamless wrap
}

/* ------------------------- providers ------------------------- */
let readProvider = null, contractRead = null;
let signer = null, user = null, walletChainId = null;
const S = { data:null, fetchedAt:0, cooldownRemain:0, cooldownOverride:0, deployed:null,
            qty:1, busyFree:false, busyPaid:false, gasPaid:null, gasFree:null };
let readErrorShown = false, liveDeb = null;

function setReadProvider(provider){
  if (contractRead) { try { contractRead.removeAllListeners(); } catch {} }
  readProvider = provider;
  contractRead = provider ? new ethers.Contract(cfg.address, ABI, provider) : null;
  bindLiveFeed();
}

function applyConfig(){
  readErrorShown = false; S.data = null; S.deployed = null;
  if (ethers.isAddress(cfg.address)) {
    setReadProvider(cfg.rpc
      ? new ethers.JsonRpcProvider(cfg.rpc, undefined, { staticNetwork: true })
      : (window.ethereum ? new ethers.BrowserProvider(window.ethereum) : null));
  } else setReadProvider(null);
  renderAll();
  el('ftAddr').textContent = cfg.address ? short(cfg.address) : '—';
  el('ftAddr').title = cfg.address || '';
  const ex = el('ftExplorer');
  if (cfg.explorer && cfg.address) { ex.hidden = false; ex.href = explorerAddr(cfg.address); ex.innerHTML = 'EXPLORER ' + I.ext; }
  else ex.hidden = true;
  if (contractRead) refreshStats();
}

async function probeReadProvider(){
  if (!readProvider) return;
  try { await readProvider.getBlockNumber(); return; } catch {}
  for (let i = 0; i < cfg.rpcs.length; i++) {
    const idx = (cfg.rpcIndex + 1 + i) % cfg.rpcs.length;
    try {
      const p = new ethers.JsonRpcProvider(cfg.rpcs[idx], undefined, { staticNetwork: true });
      await p.getBlockNumber();
      cfg.rpcIndex = idx;
      setReadProvider(p);
      refreshStats();
      return;
    } catch {}
  }
  if (window.ethereum) {
    setReadProvider(new ethers.BrowserProvider(window.ethereum));
    refreshStats();
  } else toast('error','RPC unreachable','Could not reach any Robinhood Chain public RPC. Try again shortly.');
}

function bindLiveFeed(){
  if (!contractRead || contractRead.__feed) return;
  contractRead.__feed = true;
  contractRead.on('Transfer', () => {
    clearTimeout(liveDeb);
    liveDeb = setTimeout(() => refreshStats(), 2500);
  });
}

/* ------------------------- chain reads ------------------------- */
async function refreshStats(){
  if (!contractRead) { renderAll(); return; }
  let code = null;
  try { code = await readProvider.getCode(cfg.address); } catch {}
  S.deployed = (code == null) ? null : (code !== '0x');
  if (S.deployed === false) { renderAll(); return; }

  const d = {};
  const jobs = {
    cost: contractRead.cost(), totalSupply: contractRead.totalSupply(), maxSupply: contractRead.maxSupply(),
    paused: contractRead.paused(), maxTx: contractRead.maxMintAmountPerTx(),
    maxFreeWallet: contractRead.maxFreeMintAmountPerWallet(), maxPaidWallet: contractRead.maxPaidMintAmountPerWallet(),
    freeMinted: contractRead.freeNFTAlreadyMinted(), paidMinted: contractRead.paidNFTAlreadyMinted(),
    numFree: contractRead.NUM_FREE_MINTS(), paidSupply: contractRead.paidMintSupply(),
    cooldown: contractRead.freeMintCooldown(), lastFree: contractRead.lastFreeMintTimestamp()
  };
  let okCount = 0;
  await Promise.all(Object.entries(jobs).map(async ([k,p]) => {
    try { d[k] = await p; okCount++; } catch { d[k] = null; }
  }));
  if (okCount === 0) {
    if (cfg.rpcIndex < cfg.rpcs.length - 1) {
      cfg.rpcIndex++;
      setReadProvider(new ethers.JsonRpcProvider(cfg.rpc, undefined, { staticNetwork: true }));
      refreshStats();
      return;
    }
    if (!readErrorShown) { readErrorShown = true; toast('error','Read failed','Could not read the contract via any public RPC. Retrying…'); }
    renderAll();
    return;
  }
  readErrorShown = false;
  if (user) {
    try { d.balUser = await readProvider.getBalance(user); } catch {}
    try { d.freeUsed = await contractRead.freeMintsPerWallet(user); } catch {}
    try { d.paidUsed = await contractRead.paidMintsPerWallet(user); } catch {}
  }
  try { const b = await readProvider.getBlock('latest'); d.blockTs = Number(b.timestamp); } catch {}
  S.data = d; S.fetchedAt = Date.now();
  const last = Number(d.lastFree ?? 0), cd = Number(d.cooldown ?? 0);
  S.cooldownRemain = Math.max(0, last + cd - (d.blockTs ?? Math.floor(Date.now()/1000)));
  renderAll();
  refreshGasQuotes();
}

function cooldownRemain(){
  if (!S.data) return 0;
  const chain = S.cooldownRemain - (Date.now() - S.fetchedAt) / 1000;
  const over = S.cooldownOverride ? (S.cooldownOverride - Date.now()) / 1000 : 0;
  return Math.max(0, chain, over);
}

/* ------------------------- rendering ------------------------- */
function renderAll(){
  const d = S.data;
  const chip = el('statusChip'), txt = el('statusTxt');
  chip.classList.remove('live','pausedc');
  if (!d) txt.textContent = contractRead ? 'CONNECTING' : 'NO CONTRACT';
  else if (d.paused) { chip.classList.add('pausedc'); txt.textContent = 'PAUSED'; }
  else { chip.classList.add('live'); txt.textContent = 'LIVE'; }
  const max = d ? Number(d.maxSupply) : 6969, sup = d ? Number(d.totalSupply) : 0;
  el('supplyNow').textContent = fmtN(sup);
  el('supplyMax').textContent = '/ ' + fmtN(max);
  el('barFill').style.width = (max ? Math.min(100, sup * 100 / max) : 0) + '%';
  const freeLeft = d ? Math.max(0, Number(d.numFree ?? 0) - Number(d.freeMinted ?? 0)) : null;
  el('fPrice').textContent  = d ? fmtE(d.cost) + ' ETH' : '—';
  el('fMaxTx').textContent  = d ? fmtN(d.maxTx) : '—';
  el('fFreeLeft').textContent = d ? fmtN(freeLeft) + ' / ' + fmtN(d.numFree) : '—';
  el('fCool').textContent   = d ? fmtSeconds(d.cooldown) : '—';
  renderHeader(); renderConsole(); renderBanner();
}

function renderHeader(){
  const pill = el('chainPill'), ct = el('chainTxt');
  pill.classList.remove('ok','warn');
  const mismatch = user && cfg.chainId && walletChainId && walletChainId !== cfg.chainId;
  if (mismatch) { pill.classList.add('warn'); ct.textContent = 'WRONG CHAIN'; }
  else if (user && walletChainId === cfg.chainId) { pill.classList.add('ok'); ct.textContent = cfg.chainName; }
  else if (user) { pill.classList.add('warn'); ct.textContent = 'CHAIN ' + walletChainId; }
  else ct.textContent = 'NOT CONNECTED';
  const wb = el('walletBtn');
  if (user) {
    let bal = '';
    if (S.data && S.data.balUser != null) bal = Number(fmtE(S.data.balUser)).toFixed(4) + ' ETH';
    wb.innerHTML = `<span class="wa">${short(user)}</span><span class="wb">${bal || 'CONNECTED'}</span>`;
  } else wb.innerHTML = `<span class="wa">Connect</span><span class="wb">Wallet</span>`;
}

function renderBanner(){
  const b = el('netBanner'), msg = el('netMsg'), sb = el('switchBtn');
  let show = false, text = '';
  if (user && cfg.chainId && walletChainId && walletChainId !== cfg.chainId) {
    show = true;
    text = `WRONG NETWORK — MINTING NEEDS ${cfg.chainName || 'CHAIN ' + cfg.chainId} (ID ${cfg.chainId}); YOUR WALLET IS ON ID ${walletChainId}`;
  } else if (S.deployed === false) {
    show = true;
    text = `NO CONTRACT AT ${short(cfg.address)} ON ROBINHOOD MAINNET — CHECK THE CONTRACT ADDRESS`;
  }
  b.hidden = !show;
  if (show) msg.textContent = text;
  sb.hidden = !(show && cfg.chainId && user && walletChainId && walletChainId !== cfg.chainId);
}

function freeBlockReason(){
  const d = S.data; if (!d) return 'NO CHAIN DATA';
  if (d.paused) return 'CONTRACT IS PAUSED';
  if (Number(d.numFree ?? 0) - Number(d.freeMinted ?? 0) <= 0) return 'FREE ALLOTMENT EXHAUSTED';
  if (user && d.freeUsed != null && Number(d.freeUsed) >= Number(d.maxFreeWallet)) return 'YOUR FREE ALLOWANCE IS USED';
  const cd = cooldownRemain();
  if (cd > 0) return 'ONE FREE MINT PER BLOCK — WAIT ' + fmtCd(cd);
  return '';
}

function paidCaps(){
  const d = S.data;
  const capTotal  = d ? Number(d.maxSupply) - Number(d.totalSupply) : 0;
  const capPaid   = d ? Number(d.paidSupply) - Number(d.paidMinted) : 0;
  const capWallet = (d && user && d.paidUsed != null) ? Number(d.maxPaidWallet) - Number(d.paidUsed) : Infinity;
  return { capTotal, capPaid, capWallet };
}

function maxQtyBuyable(){
  const d = S.data; if (!d) return 1;
  const { capTotal, capPaid, capWallet } = paidCaps();
  return Math.max(0, Math.min(Number(d.maxTx), capTotal, capPaid, capWallet));
}

function renderConsole(){
  const d = S.data;
  const freeBtn = el('freeBtn'), paidBtn = el('paidBtn');
  if (!contractRead) {
    el('perPrice').textContent = '— ETH'; el('totPrice').textContent = '— ETH';
    el('paidGas').textContent = '— ETH'; el('freeGas').textContent = '— ETH';
    el('freeReason').textContent = 'CONTRACT NOT CONFIGURED';
    el('paidReason').textContent = 'CONTRACT NOT CONFIGURED';
    freeBtn.textContent = 'CLAIM FREE MINT'; paidBtn.textContent = 'MINT 1';
    return;
  }
  if (!d) return;
  el('perPrice').textContent = fmtE(d.cost) + ' ETH';
  el('freeMeta').textContent = (user && d.freeUsed != null)
    ? `${fmtN(d.freeUsed)} / ${fmtN(d.maxFreeWallet)} USED`
    : `LIMIT ${fmtN(d.maxFreeWallet)} / WALLET`;
  const cd = cooldownRemain();
  if (!S.busyFree) {
    el('freeReason').textContent = freeBlockReason();
    freeBtn.textContent = (cd > 0 && !d.paused) ? `COOLING — ${fmtCd(cd)}` : 'CLAIM FREE MINT';
  }
  let maxQ = maxQtyBuyable();
  S.qty = Math.max(1, Math.min(S.qty, Math.max(1, maxQ)));
  el('qty').value = S.qty;
  const total = d.cost * BigInt(Math.max(1, S.qty));
  el('totPrice').textContent = fmtE(total) + ' ETH';
  const paidG = fmtGas(S.gasPaid && S.gasPaid.qty === S.qty ? S.gasPaid : null);
  const freeG = fmtGas(S.gasFree);
  el('paidGas').textContent = paidG.text; el('paidGas').title = paidG.title;
  el('freeGas').textContent = freeG.text; el('freeGas').title = freeG.title;
  if (!S.busyPaid) paidBtn.textContent = `MINT ${S.qty} — ${fmtE(total)} ETH`;
  let pr = '';
  if (d.paused) pr = 'CONTRACT IS PAUSED';
  else if (maxQ <= 0) {
    const { capTotal, capPaid, capWallet } = paidCaps();
    pr = capTotal <= 0 ? 'SOLD OUT' : capPaid <= 0 ? 'PAID ALLOTMENT EXHAUSTED'
       : capWallet <= 0 ? 'YOUR PAID ALLOWANCE IS USED' : 'MINTING UNAVAILABLE';
  } else if (maxQ < Number(d.maxTx)) pr = `LIMITED TO ${fmtN(maxQ)} RIGHT NOW`;
  if (!pr && user && d.balUser != null) {
    const need = total + cachedGasCost();
    if (d.balUser < need) pr = `NOT ENOUGH ETH — NEED ~${Number(fmtE(need)).toFixed(6)} ETH (MINT + RPC GAS)`;
  }
  el('paidReason').textContent = pr;
}

function tickCooldown(){
  if (!S.data) { el('coolLine').hidden = true; return; }
  const r = cooldownRemain();
  el('coolLine').hidden = !(r > 0 && !S.data.paused);
  el('coolT').textContent = fmtCd(r);
  if (S.busyFree) return;
  const showCd = r > 0 && !S.data.paused;
  el('freeBtn').textContent = showCd ? `COOLING — ${fmtCd(r)}` : 'CLAIM FREE MINT';
  el('freeReason').textContent = showCd ? 'ONE FREE MINT PER BLOCK — RETRY IN A MOMENT' : freeBlockReason();
}

/* ------------------------- wallet ------------------------- */
let activeProvider = null;
let activeWalletName = '';

const WALLETS = [
  { id: 'metamask',  name: 'MetaMask',  color: '#F6851B', letter: 'M' },
  { id: 'rabby',     name: 'Rabby',     color: '#8697FF', letter: 'R' },
  { id: 'phantom',   name: 'Phantom',   color: '#AB9FF2', letter: 'P' },
  { id: 'magiceden', name: 'Magic Eden',color: '#141414', letter: 'ME' }
];

function injectedProviders(){
  const list = [];
  const eth = window.ethereum;
  if (eth?.providers?.length) list.push(...eth.providers);
  else if (eth) list.push(eth);
  if (window.phantom?.ethereum && !list.includes(window.phantom.ethereum)) list.push(window.phantom.ethereum);
  if (window.rabby && !list.includes(window.rabby)) list.push(window.rabby);
  if (window.magiceden?.ethereum && !list.includes(window.magiceden.ethereum)) list.push(window.magiceden.ethereum);
  if (window.magiceden_ethereum && !list.includes(window.magiceden_ethereum)) list.push(window.magiceden_ethereum);
  return list;
}

function findWalletProvider(id){
  const ps = injectedProviders();
  if (id === 'metamask') return ps.find(p => p.isMetaMask && !p.isRabby && !p.isPhantom)
    || (window.ethereum && !ps.some(p => p.isRabby) ? window.ethereum : null) || ps[0] || null;
  if (id === 'rabby') return ps.find(p => p.isRabby) || window.rabby || null;
  if (id === 'phantom') return window.phantom?.ethereum
    || ps.find(p => p.isPhantom) || null;
  if (id === 'magiceden') return window.magiceden?.ethereum || window.magiceden_ethereum
    || ps.find(p => p.isMagicEden || p.isMagiceden || p.isMagicEdenWallet) || null;
  return null;
}

function walletInstalled(id){
  if (id === 'metamask') return !!(window.ethereum || injectedProviders().some(p => p.isMetaMask));
  return !!findWalletProvider(id);
}

function openWalletPicker(){
  const rows = WALLETS.map(w => {
    const inst = walletInstalled(w.id);
    return `<button class="wlpick${inst ? '' : ' off'}" data-wid="${w.id}"${inst ? '' : ' disabled'}>
      <span class="wllogo" style="background:${w.color}">${w.letter}</span>
      <span class="wlname">${w.name}</span>
      <span class="wlstate">${inst ? 'CONNECT' : 'NOT INSTALLED'}</span>
    </button>`;
  }).join('');
  openModal(`
    <div class="mhead"><h3>Connect wallet</h3><button class="icobtn" data-close aria-label="Close">${I.x}</button></div>
    <div class="mbody"><p class="mnote">Choose a wallet to continue. Robinhood Chain — ID 4663.</p>
      <div class="wlist">${rows}</div>
    </div>`);
  el('modalHost').querySelectorAll('[data-wid]').forEach(b => {
    b.onclick = async () => {
      const w = WALLETS.find(x => x.id === b.dataset.wid);
      const p = findWalletProvider(w.id);
      if (!p) { toast('error','Wallet not found', `${w.name} is not installed. Install the extension and reload this page.`); return; }
      closeModal();
      await connectProvider(p, w.name, true);
    };
  });
}

function bindWallet(){
  const p = activeProvider || window.ethereum;
  if (!p || p.__mpBound) return;
  p.__mpBound = true;
  p.on?.('accountsChanged', async accs => {
    if (!accs || !accs.length) { user = null; signer = null; renderAll(); return; }
    if (!user || accs[0].toLowerCase() !== user.toLowerCase()) {
      user = accs[0]; await attachSigner();
      refreshStats();
      toast('info','Account switched', short(user));
    }
    renderHeader();
  });
  p.on?.('chainChanged', hex => {
    walletChainId = parseInt(hex, 16);
    renderAll();
  });
}

async function attachSigner(){
  const p = activeProvider || window.ethereum;
  if (!p) return;
  const bp = new ethers.BrowserProvider(p);
  signer = await bp.getSigner();
  try { walletChainId = Number((await bp.getNetwork()).chainId); } catch {}
}

async function connectProvider(provider, name, interactive = true){
  activeProvider = provider;
  activeWalletName = name || '';
  try {
    const bp = new ethers.BrowserProvider(provider);
    if (interactive) await bp.send('eth_requestAccounts', []);
    else {
      const accs = await provider.request({ method: 'eth_accounts' });
      if (!accs || !accs.length) return false;
    }
    signer = await bp.getSigner();
    user = await signer.getAddress();
    try { walletChainId = Number((await bp.getNetwork()).chainId); } catch {}
    bindWallet();
    renderHeader(); renderConsole(); renderBanner(); refreshStats();
    if (interactive) toast('success', `${name || 'Wallet'} connected`, short(user));
    return true;
  } catch (err) {
    if (interactive) toast('error','Connection failed', err?.shortMessage || err?.message || 'The wallet request was rejected.');
    return false;
  }
}

async function connect(interactive = true){
  if (interactive) { openWalletPicker(); return false; }
  const first = injectedProviders()[0];
  if (!first) return false;
  return connectProvider(first, '', false);
}

function signerContract(){
  if (!signer) throw new Error('No signer');
  return new ethers.Contract(cfg.address, ABI, signer);
}

async function switchNetwork(){
  const p = activeProvider || window.ethereum;
  if (!p) { toast('error','No wallet','Connect a wallet first.'); openWalletPicker(); return; }
  const hex = '0x' + cfg.chainId.toString(16);
  try {
    await p.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: hex }] });
    toast('info','Network switch requested','Confirm in your wallet if prompted.');
  } catch (err) {
    const unknown = err?.code === 4902 || err?.data?.originalError?.code === 4902;
    if (unknown) {
      try {
        await p.request({ method: 'wallet_addEthereumChain', params: [{
          chainId: hex,
          chainName: 'Robinhood Chain',
          nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
          rpcUrls: [cfg.rpc],
          blockExplorerUrls: cfg.explorer ? [cfg.explorer] : []
        }]});
        toast('success','Network added','Robinhood Chain was added to your wallet.');
      } catch (e2) { toast('error','Add network failed', e2?.message || 'Rejected.'); }
    } else toast('error','Switch failed', err?.message || 'Rejected.');
  }
}

function requireReady(){
  if (!ethers.isAddress(cfg.address)) { toast('error','Configuration error','The contract address in the page source is not valid.'); return false; }
  if (!user) { openWalletPicker(); return false; }
  if (cfg.chainId && walletChainId && walletChainId !== cfg.chainId) {
    toast('error','Wrong network', `Switch to ${cfg.chainName} (ID ${cfg.chainId}) to mint.`);
    switchNetwork();
    return false;
  }
  if (S.deployed === false) { toast('error','Contract not found', `No bytecode at ${short(cfg.address)} on Robinhood mainnet.`); return false; }
  return true;
}

/* ------------------------- gas estimation -------------------------
   Real eth_estimateGas, priced at the node's gas price but never above
   MAX_GAS_PRICE_WEI (0.03 gwei). No flat ETH padding anywhere.       */
const MAX_GAS_PRICE_WEI = 30000000n;   // 0.03 gwei
const GAS_LIMIT_FALLBACK = 300000n;    // used only when estimation fails
const GAS_LIMIT_BUFFER_PCT = 20n;      // small head-room on the estimate
const PREVIEW_FROM = '0x000000000000000000000000000000000000dEaD'; // when no wallet
const MINT_IFACE = new ethers.Interface(ABI);

function paidMintTx(qty, value){
  return { to: cfg.address, data: MINT_IFACE.encodeFunctionData('mint', [qty]), value };
}
function freeMintTx(){
  return { to: cfg.address, data: MINT_IFACE.encodeFunctionData('mintFree') };
}

async function quoteGas(txReq){
  const q = { price: MAX_GAS_PRICE_WEI, limit: GAS_LIMIT_FALLBACK, cost: 0n };
  if (readProvider) {
    try {
      const fee = await readProvider.getFeeData();
      const p = fee.gasPrice ?? fee.maxFeePerGas ?? 0n;
      if (p > 0n && p < q.price) q.price = p;
    } catch {}
    try {
      const req = Object.assign({ from: user || PREVIEW_FROM }, txReq);
      const est = await readProvider.estimateGas(req);
      if (est > 0n) q.limit = (est * (100n + GAS_LIMIT_BUFFER_PCT)) / 100n;
    } catch {}
  }
  q.cost = q.price * q.limit;
  return q;
}

function cachedGasCost(){
  if (S.gasPaid && S.gasPaid.qty === S.qty) return S.gasPaid.cost;
  return MAX_GAS_PRICE_WEI * GAS_LIMIT_FALLBACK;
}

async function refreshGasQuotes(){
  if (!readProvider || !S.data || !cfg.address) return;
  const seq = (refreshGasQuotes.__seq = (refreshGasQuotes.__seq || 0) + 1);
  const qty = Math.max(1, S.qty);
  try {
    const [paid, free] = await Promise.all([
      quoteGas(paidMintTx(qty, S.data.cost * BigInt(qty))),
      quoteGas(freeMintTx())
    ]);
    if (seq !== refreshGasQuotes.__seq) return;
    S.gasPaid = { qty, price: paid.price, limit: paid.limit, cost: paid.cost };
    S.gasFree = { price: free.price, limit: free.limit, cost: free.cost };
    renderConsole();
  } catch {}
}

function fmtGas(q){
  if (!q || q.cost == null) return { text: '— ETH', title: '' };
  const eth = Number(fmtE(q.cost)).toFixed(9);
  const gwei = Number(q.price) / 1e9;
  return { text: eth + ' ETH', title: `${fmtN(q.limit)} gas @ ${gwei} gwei (capped 0.03)` };
}

/* ------------------------- transactions ------------------------- */
async function sendTx(promiseFactory, { pendingTitle = 'CONFIRM IN WALLET', errMap = null, ethNeeded = 0n } = {}){
  if (ethNeeded > 0n && user && readProvider) {
    try {
      const bal = await readProvider.getBalance(user);
      if (bal < ethNeeded) {
        toast('error','Not enough ETH',
          `You need at least ${fmtE(ethNeeded)} ETH for this mint (price + estimated gas at ≤0.03 gwei). Your wallet has ${fmtE(bal)} ETH.`,
          10000);
        return null;
      }
    } catch {}
  }
  const t = toast('pending', pendingTitle, 'Review and sign in your wallet…', 0);
  try {
    const tx = await promiseFactory();
    t.el.querySelector('.tt').textContent = 'SUBMITTED';
    t.el.querySelector('.tb').textContent = short(tx.hash) + ' — waiting for confirmation…';
    const link = explorerTx(tx.hash);
    if (link && !t.el.querySelector('.tlink')) {
      const a = document.createElement('a');
      a.className = 'tlink'; a.href = link; a.target = '_blank'; a.rel = 'noopener';
      a.textContent = 'VIEW ON EXPLORER';
      t.el.querySelector('.tb').after(a);
    }
    const rc = await tx.wait();
    t.kill();
    if (rc.status !== 1) { toast('error','Reverted','The contract reverted — nothing changed on-chain.', 8000, explorerTx(rc.hash)); return null; }
    return rc;
  } catch (err) {
    t.kill();
    let msg = err?.code === 'ACTION_REJECTED' ? 'You rejected the request in your wallet.'
      : (err?.shortMessage || err?.revert?.args?.[0] || err?.reason || err?.message || 'Unknown error.');
    msg = String(msg);
    if (/insufficient funds|exceeds balance|missing revert data|gas required exceeds|insufficient allowance|value.*less/i.test(msg)
        || err?.code === 'INSUFFICIENT_FUNDS' || err?.error?.code === -32000 && /funds|balance/i.test(msg)) {
      toast('error','Not enough ETH',
        ethNeeded > 0n
          ? `You need at least ${fmtE(ethNeeded)} ETH for this mint (plus gas for the transaction). Top up your wallet and try again.`
          : 'Your wallet does not have enough ETH to pay for gas (and mint cost if any). Top up and try again.',
        10000);
      return null;
    }
    msg = errMap ? errMap(msg) : msg;
    toast('error','Transaction failed', msg, 9000);
    return null;
  }
}

/* Friendly English for the revert reasons this contract emits. */
const FREE_ERR_MAP = m => {
  if (/cooldown/i.test(m)) return 'One free mint per block — wait a few seconds and try again.';
  if (/no free left/i.test(m)) return 'The free allotment is used up.';
  if (/max free\/wallet/i.test(m)) return 'Your wallet has already claimed its free mint.';
  if (/paid out/i.test(m)) return 'The paid allotment is sold out.';
  if (/max paid\/wallet/i.test(m)) return 'Your wallet has reached its paid mint limit.';
  if (/max\/tx/i.test(m)) return 'That quantity is above the per-transaction limit.';
  if (/bad value/i.test(m)) return 'Wrong ETH amount sent — refresh the price and try again.';
  if (/amount=0/i.test(m)) return 'Choose a quantity of 1 or more.';
  if (/paused/i.test(m)) return 'The contract is paused right now.';
  if (/no more/i.test(m)) return 'The collection is sold out.';
  if (/insufficient funds|missing revert data|exceeds balance/i.test(m)) return 'Not enough ETH in your wallet for gas (and mint cost). Top up and try again.';
  return m;
};

function mintedIdsFromReceipt(rc, to){
  const iface = new ethers.Interface(ABI);
  const out = [];
  for (const lg of (rc.logs || [])) {
    try {
      const p = iface.parseLog({ topics: lg.topics ? [...lg.topics] : [], data: lg.data });
      if (p && p.name === 'Transfer' && p.args.from === ethers.ZeroAddress
          && String(p.args.to).toLowerCase() === String(to).toLowerCase()) out.push(p.args.tokenId.toString());
    } catch {}
  }
  return out;
}

async function doFreeMint(){
  if (S.busyFree) return;
  if (!requireReady()) return;
  const blocker = freeBlockReason();
  if (blocker) { toast('info','Hold on', blocker); return; }
  S.busyFree = true; el('freeBtn').classList.add('busy'); el('freeBtn').textContent = 'CLAIMING\u2026';
  const gas = await quoteGas(freeMintTx());
  const rc = await sendTx(() => signerContract().mintFree(), { pendingTitle: 'FREE MINT', errMap: FREE_ERR_MAP, ethNeeded: gas.cost });
  S.busyFree = false; el('freeBtn').classList.remove('busy');
  if (!rc) { refreshStats(); return; }
  if (S.data) S.cooldownOverride = Date.now() + Number(S.data.cooldown) * 1000;
  const ids = mintedIdsFromReceipt(rc, user);
  toast('success','Free mint confirmed', ids.length ? `MONKZHOOD #${ids.join(', #')} is yours.` : 'Mint confirmed on-chain.', 0, explorerTx(rc.hash));
  refreshStats(); tickCooldown();
}

async function doPaidMint(){
  if (S.busyPaid) return;
  if (!requireReady()) return;
  const d = S.data;
  const maxQ = maxQtyBuyable();
  if (d.paused) { toast('info','Paused','The contract is paused right now.'); return; }
  if (maxQ <= 0) { toast('info','Can\u2019t mint', el('paidReason').textContent || 'No allocation available.'); return; }
  S.qty = Math.min(S.qty, maxQ);
  const qty = S.qty, value = d.cost * BigInt(qty);
  const gas = await quoteGas(paidMintTx(qty, value));
  S.busyPaid = true; el('paidBtn').classList.add('busy'); el('paidBtn').textContent = 'MINTING…';
  const rc = await sendTx(() => signerContract().mint(qty, { value }), {
    pendingTitle: `MINT ${qty} TOKEN${qty>1?'S':''}`,
    errMap: FREE_ERR_MAP,
    ethNeeded: value + gas.cost
  });
  S.busyPaid = false; el('paidBtn').classList.remove('busy');
  if (!rc) { refreshStats(); return; }
  const ids = mintedIdsFromReceipt(rc, user);
  toast('success', `Minted ${ids.length || qty} token${(ids.length||qty)>1?'s':''}`,
    ids.length ? `MONKZHOOD #${ids.join(', #')} are yours.` : 'Mint confirmed on-chain.', 0, explorerTx(rc.hash));
  refreshStats();
}

/* ------------------------- misc UI ------------------------- */
el('walletBtn').onclick = () => {
  if (!user) { openWalletPicker(); return; }
  const m = el('wmenu');
  if (!m.hidden) { m.hidden = true; return; }
  m.innerHTML = `
    <button data-act="copy">${I.copy} COPY ADDRESS</button>
    ${cfg.explorer ? `<a href="${explorerAddr(user)}" target="_blank" rel="noopener">${I.ext} VIEW ON EXPLORER</a>` : ''}
    <button data-act="disc">${I.x} DISCONNECT</button>`;
  m.hidden = false;
  m.querySelectorAll('[data-act]').forEach(b => b.onclick = () => {
    m.hidden = true;
    if (b.dataset.act === 'copy') copyText(user, 'Address copied');
    if (b.dataset.act === 'disc') { user = null; signer = null; renderAll(); toast('info','Disconnected','Wallet session cleared in this page.'); }
  });
};
document.addEventListener('click', e => { if (!e.target.closest('.hactions')) el('wmenu').hidden = true; });

function copyText(text, msg){
  const done = () => toast('success', msg || 'Copied', short(text));
  if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(done, done);
  else { const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); done(); }
}
el('copyAddr').onclick = () => { if (cfg.address) copyText(cfg.address, 'Contract address copied'); };

el('dec').onclick = () => { S.qty = Math.max(1, S.qty - 1); renderConsole(); refreshGasQuotes(); };
el('inc').onclick = () => { S.qty = Math.min(Math.max(1, maxQtyBuyable() || 1), S.qty + 1); renderConsole(); refreshGasQuotes(); };
el('maxBtn').onclick = () => { const m = maxQtyBuyable(); if (m >= 1) { S.qty = m; renderConsole(); refreshGasQuotes(); } };
el('qty').addEventListener('change', () => {
  const v = parseInt(el('qty').value, 10);
  S.qty = isNaN(v) ? 1 : Math.max(1, Math.min(v, Math.max(1, maxQtyBuyable() || 1)));
  renderConsole();
  refreshGasQuotes();
});
el('qty').addEventListener('keydown', e => { if (e.key === 'Enter') el('qty').blur(); });

el('freeBtn').onclick = doFreeMint;
el('paidBtn').onclick = doPaidMint;
el('switchBtn').onclick = switchNetwork;

/* ------------------------- boot ------------------------- */
renderAll();
applyConfig();
probeReadProvider();
initGallery();

(async () => {
  const p = injectedProviders()[0];
  if (p) {
    activeProvider = p;
    bindWallet();
    try { walletChainId = Number((await p.request({ method: 'eth_chainId' }))); } catch {}
    await connectProvider(p, '', false);
    renderAll();
  }
})();

setInterval(() => { if (!document.hidden && contractRead) refreshStats(); }, 30000);
window.addEventListener('focus', () => { if (contractRead && Date.now() - S.fetchedAt > 8000) refreshStats(); });
setInterval(tickCooldown, 500);
tickCooldown();
