export interface City {
  id: number
  name: string
  state: State
  country: Country
  coord: Coord
}

export interface Coord {
  lon: number
  lat: number
}

export enum Country {
  AE = 'AE',
  AF = 'AF',
  AI = 'AI',
  Ad = 'AD',
  Ag = 'AG',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  BI = 'BI',
  BT = 'BT',
  BW = 'BW',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  By = 'BY',
  Bz = 'BZ',
  CA = 'CA',
  CD = 'CD',
  CF = 'CF',
  CG = 'CG',
  CM = 'CM',
  CN = 'CN',
  CR = 'CR',
  Cc = 'CC',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Co = 'CO',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Empty = '',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  GB = 'GB',
  Ga = 'GA',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  HT = 'HT',
  Hk = 'HK',
  Hn = 'HN',
  Hr = 'HR',
  Hu = 'HU',
  ID = 'ID',
  IL = 'IL',
  IM = 'IM',
  IR = 'IR',
  Ie = 'IE',
  In = 'IN',
  Iq = 'IQ',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  KM = 'KM',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  LB = 'LB',
  LV = 'LV',
  La = 'LA',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Ly = 'LY',
  MF = 'MF',
  MS = 'MS',
  MT = 'MT',
  MX = 'MX',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  My = 'MY',
  Mz = 'MZ',
  NI = 'NI',
  NP = 'NP',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Nl = 'NL',
  No = 'NO',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  PE = 'PE',
  PG = 'PG',
  PR = 'PR',
  PS = 'PS',
  Pa = 'PA',
  Pf = 'PF',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  QA = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  SD = 'SD',
  SE = 'SE',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  VG = 'VG',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW',
}

export enum State {
  Ak = 'AK',
  Al = 'AL',
  Ar = 'AR',
  Az = 'AZ',
  CA = 'CA',
  CT = 'CT',
  Co = 'CO',
  Dc = 'DC',
  De = 'DE',
  Empty = '',
  FL = 'FL',
  Ga = 'GA',
  Hi = 'HI',
  ID = 'ID',
  IL = 'IL',
  Ia = 'IA',
  In = 'IN',
  Ks = 'KS',
  Ky = 'KY',
  La = 'LA',
  MS = 'MS',
  MT = 'MT',
  Ma = 'MA',
  Md = 'MD',
  Me = 'ME',
  Mi = 'MI',
  Mn = 'MN',
  Mo = 'MO',
  Nc = 'NC',
  Nd = 'ND',
  Ne = 'NE',
  Nh = 'NH',
  Nj = 'NJ',
  Nm = 'NM',
  Nv = 'NV',
  Ny = 'NY',
  Oh = 'OH',
  Ok = 'OK',
  Or = 'OR',
  Pa = 'PA',
  Ri = 'RI',
  SD = 'SD',
  Sc = 'SC',
  The00 = '00',
  Tn = 'TN',
  Tx = 'TX',
  Ut = 'UT',
  VT = 'VT',
  Va = 'VA',
  Wa = 'WA',
  Wi = 'WI',
  Wv = 'WV',
  Wy = 'WY',
}