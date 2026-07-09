// app.js

// Onze Database (Test set)
const flagData = [
    { id: 'ad', country: 'Andorra', continent: ['europa'], img: 'w2560/ad.png' },
    { id: 'ae', country: 'Verenigde Arabische Emiraten', continent: ['azie'], img: 'w2560/ae.png' },
    { id: 'af', country: 'Afghanistan', continent: ['azie'], img: 'w2560/af.png' },
    { id: 'ag', country: 'Antigua en Barbuda', continent: ['noord-amerika'], img: 'w2560/ag.png' },
    { id: 'ai', country: 'Anguilla', continent: ['noord-amerika'], img: 'w2560/ai.png' },
    { id: 'al', country: 'Albanië', continent: ['europa'], img: 'w2560/al.png' },
    { id: 'am', country: 'Armenië', continent: ['azie', 'europa'], img: 'w2560/am.png' },
    { id: 'ao', country: 'Angola', continent: ['afrika'], img: 'w2560/ao.png' },
    { id: 'aq', country: 'Antarctica', continent: ['antarctica'], img: 'w2560/aq.png' },
    { id: 'ar', country: 'Argentinië', continent: ['zuid-amerika'], img: 'w2560/ar.png' },
    { id: 'as', country: 'Amerikaans-Samoa', continent: ['oceanie'], img: 'w2560/as.png' },
    { id: 'at', country: 'Oostenrijk', continent: ['europa'], img: 'w2560/at.png' },
    { id: 'au', country: 'Australië', continent: ['oceanie'], img: 'w2560/au.png' },
    { id: 'aw', country: 'Aruba', continent: ['noord-amerika'], img: 'w2560/aw.png' },
    { id: 'ax', country: 'Åland', continent: ['europa'], img: 'w2560/ax.png' },
    { id: 'az', country: 'Azerbeidzjan', continent: ['azie', 'europa'], img: 'w2560/az.png' },
    { id: 'ba', country: 'Bosnië en Herzegovina', continent: ['europa'], img: 'w2560/ba.png' },
    { id: 'bb', country: 'Barbados', continent: ['noord-amerika'], img: 'w2560/bb.png' },
    { id: 'bd', country: 'Bangladesh', continent: ['azie'], img: 'w2560/bd.png' },
    { id: 'be', country: 'België', continent: ['europa'], img: 'w2560/be.png' },
    { id: 'bf', country: 'Burkina Faso', continent: ['afrika'], img: 'w2560/bf.png' },
    { id: 'bg', country: 'Bulgarije', continent: ['europa'], img: 'w2560/bg.png' },
    { id: 'bh', country: 'Bahrein', continent: ['azie'], img: 'w2560/bh.png' },
    { id: 'bi', country: 'Burundi', continent: ['afrika'], img: 'w2560/bi.png' },
    { id: 'bj', country: 'Benin', continent: ['afrika'], img: 'w2560/bj.png' },
    { id: 'bl', country: 'Saint-Barthélemy', continent: ['noord-amerika'], img: 'w2560/bl.png' },
    { id: 'bm', country: 'Bermuda', continent: ['noord-amerika'], img: 'w2560/bm.png' },
    { id: 'bn', country: 'Brunei', continent: ['azie'], img: 'w2560/bn.png' },
    { id: 'bo', country: 'Bolivia', continent: ['zuid-amerika'], img: 'w2560/bo.png' },
    { id: 'bq', country: 'Caribisch Nederland', continent: ['noord-amerika'], img: 'w2560/bq.png' },
    { id: 'br', country: 'Brazilië', continent: ['zuid-amerika'], img: 'w2560/br.png' },
    { id: 'bs', country: 'Bahama\'s', continent: ['noord-amerika'], img: 'w2560/bs.png' },
    { id: 'bt', country: 'Bhutan', continent: ['azie'], img: 'w2560/bt.png' },
    { id: 'bw', country: 'Botswana', continent: ['afrika'], img: 'w2560/bw.png' },
    { id: 'by', country: 'Wit-Rusland', continent: ['europa'], img: 'w2560/by.png' },
    { id: 'bz', country: 'Belize', continent: ['noord-amerika'], img: 'w2560/bz.png' },
    { id: 'ca', country: 'Canada', continent: ['noord-amerika'], img: 'w2560/ca.png' },
    { id: 'cc', country: 'Cocoseilanden', continent: ['azie'], img: 'w2560/cc.png' },
    { id: 'cd', country: 'Congo-Kinshasa', continent: ['afrika'], img: 'w2560/cd.png' },
    { id: 'cf', country: 'Centraal-Afrikaanse Republiek', continent: ['afrika'], img: 'w2560/cf.png' },
    { id: 'cg', country: 'Congo-Brazzaville', continent: ['afrika'], img: 'w2560/cg.png' },
    { id: 'ch', country: 'Zwitserland', continent: ['europa'], img: 'w2560/ch.png' },
    { id: 'ci', country: 'Ivoorkust', continent: ['afrika'], img: 'w2560/ci.png' },
    { id: 'ck', country: 'Cookeilanden', continent: ['oceanie'], img: 'w2560/ck.png' },
    { id: 'cl', country: 'Chili', continent: ['zuid-amerika'], img: 'w2560/cl.png' },
    { id: 'cm', country: 'Kameroen', continent: ['afrika'], img: 'w2560/cm.png' },
    { id: 'cn', country: 'China', continent: ['azie'], img: 'w2560/cn.png' },
    { id: 'co', country: 'Colombia', continent: ['zuid-amerika'], img: 'w2560/co.png' },
    { id: 'cr', country: 'Costa Rica', continent: ['noord-amerika'], img: 'w2560/cr.png' },
    { id: 'cu', country: 'Cuba', continent: ['noord-amerika'], img: 'w2560/cu.png' },
    { id: 'cv', country: 'Kaapverdië', continent: ['afrika'], img: 'w2560/cv.png' },
    { id: 'cw', country: 'Curaçao', continent: ['noord-amerika'], img: 'w2560/cw.png' },
    { id: 'cx', country: 'Christmaseiland', continent: ['azie'], img: 'w2560/cx.png' },
    { id: 'cy', country: 'Cyprus', continent: ['europa', 'azie'], img: 'w2560/cy.png' },
    { id: 'cz', country: 'Tsjechië', continent: ['europa'], img: 'w2560/cz.png' },
    { id: 'de', country: 'Duitsland', continent: ['europa'], img: 'w2560/de.png' },
    { id: 'dj', country: 'Djibouti', continent: ['afrika'], img: 'w2560/dj.png' },
    { id: 'dk', country: 'Denemarken', continent: ['europa'], img: 'w2560/dk.png' },
    { id: 'dm', country: 'Dominica', continent: ['noord-amerika'], img: 'w2560/dm.png' },
    { id: 'do', country: 'Dominicaanse Republiek', continent: ['noord-amerika'], img: 'w2560/do.png' },
    { id: 'dz', country: 'Algerije', continent: ['afrika'], img: 'w2560/dz.png' },
    { id: 'ec', country: 'Ecuador', continent: ['zuid-amerika'], img: 'w2560/ec.png' },
    { id: 'ee', country: 'Estland', continent: ['europa'], img: 'w2560/ee.png' },
    { id: 'eg', country: 'Egypte', continent: ['afrika', 'azie'], img: 'w2560/eg.png' },
    { id: 'eh', country: 'Westelijke Sahara', continent: ['afrika'], img: 'w2560/eh.png' },
    { id: 'er', country: 'Eritrea', continent: ['afrika'], img: 'w2560/er.png' },
    { id: 'es', country: 'Spanje', continent: ['europa'], img: 'w2560/es.png' },
    { id: 'et', country: 'Ethiopië', continent: ['afrika'], img: 'w2560/et.png' },
    { id: 'fi', country: 'Finland', continent: ['europa'], img: 'w2560/fi.png' },
    { id: 'fj', country: 'Fiji', continent: ['oceanie'], img: 'w2560/fj.png' },
    { id: 'fk', country: 'Falklandeilanden', continent: ['zuid-amerika'], img: 'w2560/fk.png' },
    { id: 'fm', country: 'Micronesië', continent: ['oceanie'], img: 'w2560/fm.png' },
    { id: 'fo', country: 'Faeröer', continent: ['europa'], img: 'w2560/fo.png' },
    { id: 'fr', country: 'Frankrijk', continent: ['europa'], img: 'w2560/fr.png' },
    { id: 'ga', country: 'Gabon', continent: ['afrika'], img: 'w2560/ga.png' },
    { id: 'gb-eng', country: 'Engeland', continent: ['europa'], img: 'w2560/gb-eng.png' },
    { id: 'gb-nir', country: 'Noord-Ierland', continent: ['europa'], img: 'w2560/gb-nir.png' },
    { id: 'gb-sct', country: 'Schotland', continent: ['europa'], img: 'w2560/gb-sct.png' },
    { id: 'gb-wls', country: 'Wales', continent: ['europa'], img: 'w2560/gb-wls.png' },
    { id: 'gb', country: 'Verenigd Koninkrijk', continent: ['europa'], img: 'w2560/gb.png' },
    { id: 'gd', country: 'Grenada', continent: ['noord-amerika'], img: 'w2560/gd.png' },
    { id: 'ge', country: 'Georgië', continent: ['azie', 'europa'], img: 'w2560/ge.png' },
    { id: 'gf', country: 'Frans-Guyana', continent: ['zuid-amerika'], img: 'w2560/gf.png' },
    { id: 'gg', country: 'Guernsey', continent: ['europa'], img: 'w2560/gg.png' },
    { id: 'gh', country: 'Ghana', continent: ['afrika'], img: 'w2560/gh.png' },
    { id: 'gi', country: 'Gibraltar', continent: ['europa'], img: 'w2560/gi.png' },
    { id: 'gl', country: 'Groenland', continent: ['noord-amerika'], img: 'w2560/gl.png' },
    { id: 'gm', country: 'Gambia', continent: ['afrika'], img: 'w2560/gm.png' },
    { id: 'gn', country: 'Guinee', continent: ['afrika'], img: 'w2560/gn.png' },
    { id: 'gp', country: 'Guadeloupe', continent: ['noord-amerika'], img: 'w2560/gp.png' },
    { id: 'gq', country: 'Equatoriaal-Guinea', continent: ['afrika'], img: 'w2560/gq.png' },
    { id: 'gr', country: 'Griekenland', continent: ['europa'], img: 'w2560/gr.png' },
    { id: 'gs', country: 'Zuid-Georgia', continent: ['antarctica'], img: 'w2560/gs.png' },
    { id: 'gt', country: 'Guatemala', continent: ['noord-amerika'], img: 'w2560/gt.png' },
    { id: 'gu', country: 'Guam', continent: ['oceanie'], img: 'w2560/gu.png' },
    { id: 'gw', country: 'Guinee-Bissau', continent: ['afrika'], img: 'w2560/gw.png' },
    { id: 'gy', country: 'Guyana', continent: ['zuid-amerika'], img: 'w2560/gy.png' },
    { id: 'hk', country: 'Hongkong', continent: ['azie'], img: 'w2560/hk.png' },
    { id: 'hm', country: 'Heard en McDonaldeilanden', continent: ['antarctica'], img: 'w2560/hm.png' },
    { id: 'hn', country: 'Honduras', continent: ['noord-amerika'], img: 'w2560/hn.png' },
    { id: 'hr', country: 'Kroatië', continent: ['europa'], img: 'w2560/hr.png' },
    { id: 'ht', country: 'Haïti', continent: ['noord-amerika'], img: 'w2560/ht.png' },
    { id: 'hu', country: 'Hongarije', continent: ['europa'], img: 'w2560/hu.png' },
    { id: 'id', country: 'Indonesië', continent: ['azie', 'oceanie'], img: 'w2560/id.png' },
    { id: 'ie', country: 'Ierland', continent: ['europa'], img: 'w2560/ie.png' },
    { id: 'il', country: 'Israël', continent: ['azie'], img: 'w2560/il.png' },
    { id: 'im', country: 'Isle of Man', continent: ['europa'], img: 'w2560/im.png' },
    { id: 'in', country: 'India', continent: ['azie'], img: 'w2560/in.png' },
    { id: 'io', country: 'Brits Indische Oceaanterritorium', continent: ['azie'], img: 'w2560/io.png' },
    { id: 'iq', country: 'Irak', continent: ['azie'], img: 'w2560/iq.png' },
    { id: 'ir', country: 'Iran', continent: ['azie'], img: 'w2560/ir.png' },
    { id: 'is', country: 'IJsland', continent: ['europa'], img: 'w2560/is.png' },
    { id: 'it', country: 'Italië', continent: ['europa'], img: 'w2560/it.png' },
    { id: 'je', country: 'Jersey', continent: ['europa'], img: 'w2560/je.png' },
    { id: 'jm', country: 'Jamaica', continent: ['noord-amerika'], img: 'w2560/jm.png' },
    { id: 'jo', country: 'Jordanië', continent: ['azie'], img: 'w2560/jo.png' },
    { id: 'jp', country: 'Japan', continent: ['azie'], img: 'w2560/jp.png' },
    { id: 'ke', country: 'Kenia', continent: ['afrika'], img: 'w2560/ke.png' },
    { id: 'kg', country: 'Kirgizië', continent: ['azie'], img: 'w2560/kg.png' },
    { id: 'kh', country: 'Cambodja', continent: ['azie'], img: 'w2560/kh.png' },
    { id: 'ki', country: 'Kiribati', continent: ['oceanie'], img: 'w2560/ki.png' },
    { id: 'km', country: 'Comoren', continent: ['afrika'], img: 'w2560/km.png' },
    { id: 'kn', country: 'Saint Kitts en Nevis', continent: ['noord-amerika'], img: 'w2560/kn.png' },
    { id: 'kp', country: 'Noord-Korea', continent: ['azie'], img: 'w2560/kp.png' },
    { id: 'kr', country: 'Zuid-Korea', continent: ['azie'], img: 'w2560/kr.png' },
    { id: 'kw', country: 'Koeweit', continent: ['azie'], img: 'w2560/kw.png' },
    { id: 'ky', country: 'Kaaimaneilanden', continent: ['noord-amerika'], img: 'w2560/ky.png' },
    { id: 'kz', country: 'Kazachstan', continent: ['azie', 'europa'], img: 'w2560/kz.png' },
    { id: 'la', country: 'Laos', continent: ['azie'], img: 'w2560/la.png' },
    { id: 'lb', country: 'Libanon', continent: ['azie'], img: 'w2560/lb.png' },
    { id: 'lc', country: 'Saint Lucia', continent: ['noord-amerika'], img: 'w2560/lc.png' },
    { id: 'li', country: 'Liechtenstein', continent: ['europa'], img: 'w2560/li.png' },
    { id: 'lk', country: 'Sri Lanka', continent: ['azie'], img: 'w2560/lk.png' },
    { id: 'lr', country: 'Liberia', continent: ['afrika'], img: 'w2560/lr.png' },
    { id: 'ls', country: 'Lesotho', continent: ['afrika'], img: 'w2560/ls.png' },
    { id: 'lt', country: 'Litouwen', continent: ['europa'], img: 'w2560/lt.png' },
    { id: 'lu', country: 'Luxemburg', continent: ['europa'], img: 'w2560/lu.png' },
    { id: 'lv', country: 'Letland', continent: ['europa'], img: 'w2560/lv.png' },
    { id: 'ly', country: 'Libië', continent: ['afrika'], img: 'w2560/ly.png' },
    { id: 'ma', country: 'Marokko', continent: ['afrika'], img: 'w2560/ma.png' },
    { id: 'mc', country: 'Monaco', continent: ['europa'], img: 'w2560/mc.png' },
    { id: 'md', country: 'Moldavië', continent: ['europa'], img: 'w2560/md.png' },
    { id: 'me', country: 'Montenegro', continent: ['europa'], img: 'w2560/me.png' },
    { id: 'mf', country: 'Sint-Maarten (Frans deel)', continent: ['noord-amerika'], img: 'w2560/mf.png' },
    { id: 'mg', country: 'Madagaskar', continent: ['afrika'], img: 'w2560/mg.png' },
    { id: 'mh', country: 'Marshalleilanden', continent: ['oceanie'], img: 'w2560/mh.png' },
    { id: 'mk', country: 'Noord-Macedonië', continent: ['europa'], img: 'w2560/mk.png' },
    { id: 'ml', country: 'Mali', continent: ['afrika'], img: 'w2560/ml.png' },
    { id: 'mm', country: 'Myanmar', continent: ['azie'], img: 'w2560/mm.png' },
    { id: 'mn', country: 'Mongolië', continent: ['azie'], img: 'w2560/mn.png' },
    { id: 'mo', country: 'Macau', continent: ['azie'], img: 'w2560/mo.png' },
    { id: 'mp', country: 'Noordelijke Marianen', continent: ['oceanie'], img: 'w2560/mp.png' },
    { id: 'mq', country: 'Martinique', continent: ['noord-amerika'], img: 'w2560/mq.png' },
    { id: 'mr', country: 'Mauritanië', continent: ['afrika'], img: 'w2560/mr.png' },
    { id: 'ms', country: 'Montserrat', continent: ['noord-amerika'], img: 'w2560/ms.png' },
    { id: 'mt', country: 'Malta', continent: ['europa'], img: 'w2560/mt.png' },
    { id: 'mu', country: 'Mauritius', continent: ['afrika'], img: 'w2560/mu.png' },
    { id: 'mv', country: 'Malediven', continent: ['azie'], img: 'w2560/mv.png' },
    { id: 'mw', country: 'Malawi', continent: ['afrika'], img: 'w2560/mw.png' },
    { id: 'mx', country: 'Mexico', continent: ['noord-amerika'], img: 'w2560/mx.png' },
    { id: 'my', country: 'Maleisië', continent: ['azie'], img: 'w2560/my.png' },
    { id: 'mz', country: 'Mozambique', continent: ['afrika'], img: 'w2560/mz.png' },
    { id: 'na', country: 'Namibië', continent: ['afrika'], img: 'w2560/na.png' },
    { id: 'nc', country: 'Nieuw-Caledonië', continent: ['oceanie'], img: 'w2560/nc.png' },
    { id: 'ne', country: 'Niger', continent: ['afrika'], img: 'w2560/ne.png' },
    { id: 'nf', country: 'Norfolk', continent: ['oceanie'], img: 'w2560/nf.png' },
    { id: 'ng', country: 'Nigeria', continent: ['afrika'], img: 'w2560/ng.png' },
    { id: 'ni', country: 'Nicaragua', continent: ['noord-amerika'], img: 'w2560/ni.png' },
    { id: 'nl', country: 'Nederland', continent: ['europa'], img: 'w2560/nl.png' },
    { id: 'no', country: 'Noorwegen', continent: ['europa'], img: 'w2560/no.png' },
    { id: 'np', country: 'Nepal', continent: ['azie'], img: 'w2560/np.png' },
    { id: 'nr', country: 'Nauru', continent: ['oceanie'], img: 'w2560/nr.png' },
    { id: 'nu', country: 'Niue', continent: ['oceanie'], img: 'w2560/nu.png' },
    { id: 'nz', country: 'Nieuw-Zeeland', continent: ['oceanie'], img: 'w2560/nz.png' },
    { id: 'om', country: 'Oman', continent: ['azie'], img: 'w2560/om.png' },
    { id: 'pa', country: 'Panama', continent: ['noord-amerika'], img: 'w2560/pa.png' },
    { id: 'pe', country: 'Peru', continent: ['zuid-amerika'], img: 'w2560/pe.png' },
    { id: 'pf', country: 'Frans-Polynesië', continent: ['oceanie'], img: 'w2560/pf.png' },
    { id: 'pg', country: 'Papoea-Nieuw-Guinea', continent: ['oceanie'], img: 'w2560/pg.png' },
    { id: 'ph', country: 'Filipijnen', continent: ['azie'], img: 'w2560/ph.png' },
    { id: 'pk', country: 'Pakistan', continent: ['azie'], img: 'w2560/pk.png' },
    { id: 'pl', country: 'Polen', continent: ['europa'], img: 'w2560/pl.png' },
    { id: 'pm', country: 'Saint-Pierre en Miquelon', continent: ['noord-amerika'], img: 'w2560/pm.png' },
    { id: 'pn', country: 'Pitcairneilanden', continent: ['oceanie'], img: 'w2560/pn.png' },
    { id: 'pr', country: 'Puerto Rico', continent: ['noord-amerika'], img: 'w2560/pr.png' },
    { id: 'ps', country: 'Palestina', continent: ['azie'], img: 'w2560/ps.png' },
    { id: 'pt', country: 'Portugal', continent: ['europa'], img: 'w2560/pt.png' },
    { id: 'pw', country: 'Palau', continent: ['oceanie'], img: 'w2560/pw.png' },
    { id: 'py', country: 'Paraguay', continent: ['zuid-amerika'], img: 'w2560/py.png' },
    { id: 'qa', country: 'Qatar', continent: ['azie'], img: 'w2560/qa.png' },
    { id: 're', country: 'Réunion', continent: ['afrika'], img: 'w2560/re.png' },
    { id: 'ro', country: 'Roemenië', continent: ['europa'], img: 'w2560/ro.png' },
    { id: 'rs', country: 'Servië', continent: ['europa'], img: 'w2560/rs.png' },
    { id: 'ru', country: 'Rusland', continent: ['europa', 'azie'], img: 'w2560/ru.png' },
    { id: 'rw', country: 'Rwanda', continent: ['afrika'], img: 'w2560/rw.png' },
    { id: 'sa', country: 'Saoedi-Arabië', continent: ['azie'], img: 'w2560/sa.png' },
    { id: 'sb', country: 'Salomonseilanden', continent: ['oceanie'], img: 'w2560/sb.png' },
    { id: 'sc', country: 'Seychellen', continent: ['afrika'], img: 'w2560/sc.png' },
    { id: 'sd', country: 'Soedan', continent: ['afrika'], img: 'w2560/sd.png' },
    { id: 'se', country: 'Zweden', continent: ['europa'], img: 'w2560/se.png' },
    { id: 'sg', country: 'Singapore', continent: ['azie'], img: 'w2560/sg.png' },
    { id: 'sh', country: 'Sint-Helena', continent: ['afrika'], img: 'w2560/sh.png' },
    { id: 'si', country: 'Slovenië', continent: ['europa'], img: 'w2560/si.png' },
    { id: 'sk', country: 'Slowakije', continent: ['europa'], img: 'w2560/sk.png' },
    { id: 'sl', country: 'Sierra Leone', continent: ['afrika'], img: 'w2560/sl.png' },
    { id: 'sm', country: 'San Marino', continent: ['europa'], img: 'w2560/sm.png' },
    { id: 'sn', country: 'Senegal', continent: ['afrika'], img: 'w2560/sn.png' },
    { id: 'so', country: 'Somalië', continent: ['afrika'], img: 'w2560/so.png' },
    { id: 'sr', country: 'Suriname', continent: ['zuid-amerika'], img: 'w2560/sr.png' },
    { id: 'ss', country: 'Zuid-Soedan', continent: ['afrika'], img: 'w2560/ss.png' },
    { id: 'st', country: 'Sao Tomé en Principe', continent: ['afrika'], img: 'w2560/st.png' },
    { id: 'sv', country: 'El Salvador', continent: ['noord-amerika'], img: 'w2560/sv.png' },
    { id: 'sx', country: 'Sint Maarten (Nederlands deel)', continent: ['noord-amerika'], img: 'w2560/sx.png' },
    { id: 'sy', country: 'Syrië', continent: ['azie'], img: 'w2560/sy.png' },
    { id: 'sz', country: 'Eswatini', continent: ['afrika'], img: 'w2560/sz.png' },
    { id: 'tc', country: 'Turks- en Caicoseilanden', continent: ['noord-amerika'], img: 'w2560/tc.png' },
    { id: 'td', country: 'Tsjaad', continent: ['afrika'], img: 'w2560/td.png' },
    { id: 'tf', country: 'Franse Zuidelijke Gebieden', continent: ['antarctica'], img: 'w2560/tf.png' },
    { id: 'tg', country: 'Togo', continent: ['afrika'], img: 'w2560/tg.png' },
    { id: 'th', country: 'Thailand', continent: ['azie'], img: 'w2560/th.png' },
    { id: 'tj', country: 'Tadzjikistan', continent: ['azie'], img: 'w2560/tj.png' },
    { id: 'tk', country: 'Tokelau', continent: ['oceanie'], img: 'w2560/tk.png' },
    { id: 'tl', country: 'Oost-Timor', continent: ['azie'], img: 'w2560/tl.png' },
    { id: 'tm', country: 'Turkmenistan', continent: ['azie'], img: 'w2560/tm.png' },
    { id: 'tn', country: 'Tunesië', continent: ['afrika'], img: 'w2560/tn.png' },
    { id: 'to', country: 'Tonga', continent: ['oceanie'], img: 'w2560/to.png' },
    { id: 'tr', country: 'Turkije', continent: ['europa', 'azie'], img: 'w2560/tr.png' },
    { id: 'tt', country: 'Trinidad en Tobago', continent: ['noord-amerika'], img: 'w2560/tt.png' },
    { id: 'tv', country: 'Tuvalu', continent: ['oceanie'], img: 'w2560/tv.png' },
    { id: 'tw', country: 'Taiwan', continent: ['azie'], img: 'w2560/tw.png' },
    { id: 'tz', country: 'Tanzania', continent: ['afrika'], img: 'w2560/tz.png' },
    { id: 'ua', country: 'Oekraïne', continent: ['europa'], img: 'w2560/ua.png' },
    { id: 'ug', country: 'Oeganda', continent: ['afrika'], img: 'w2560/ug.png' },
    { id: 'us', country: 'Verenigde Staten', continent: ['noord-amerika'], img: 'w2560/us.png' },
    { id: 'uy', country: 'Uruguay', continent: ['zuid-amerika'], img: 'w2560/uy.png' },
    { id: 'uz', country: 'Oezbekistan', continent: ['azie'], img: 'w2560/uz.png' },
    { id: 'va', country: 'Vaticaanstad', continent: ['europa'], img: 'w2560/va.png' },
    { id: 'vc', country: 'Saint Vincent en de Grenadines', continent: ['noord-amerika'], img: 'w2560/vc.png' },
    { id: 've', country: 'Venezuela', continent: ['zuid-amerika'], img: 'w2560/ve.png' },
    { id: 'vg', country: 'Britse Maagdeneilanden', continent: ['noord-amerika'], img: 'w2560/vg.png' },
    { id: 'vi', country: 'Amerikaanse Maagdeneilanden', continent: ['noord-amerika'], img: 'w2560/vi.png' },
    { id: 'vn', country: 'Vietnam', continent: ['azie'], img: 'w2560/vn.png' },
    { id: 'vu', country: 'Vanuatu', continent: ['oceanie'], img: 'w2560/vu.png' },
    { id: 'wf', country: 'Wallis en Futuna', continent: ['oceanie'], img: 'w2560/wf.png' },
    { id: 'ws', country: 'Samoa', continent: ['oceanie'], img: 'w2560/ws.png' },
    { id: 'xk', country: 'Kosovo', continent: ['europa'], img: 'w2560/xk.png' },
    { id: 'ye', country: 'Jemen', continent: ['azie'], img: 'w2560/ye.png' },
    { id: 'yt', country: 'Mayotte', continent: ['afrika'], img: 'w2560/yt.png' },
    { id: 'za', country: 'Zuid-Afrika', continent: ['afrika'], img: 'w2560/za.png' },
    { id: 'zm', country: 'Zambia', continent: ['afrika'], img: 'w2560/zm.png' },
    { id: 'zw', country: 'Zimbabwe', continent: ['afrika'], img: 'w2560/zw.png' }
];

// --- DOM ELEMENTEN ---
const modalStar = document.getElementById('modal-star');
const startScreen = document.getElementById('start-screen');
const flashcardScreen = document.getElementById('flashcard-screen');
const browseScreen = document.getElementById('browse-screen');

const btnStart = document.getElementById('btn-start');
const btnBrowse = document.getElementById('btn-browse');
const btnBrowseBack = document.getElementById('btn-browse-back');
const browseList = document.getElementById('browse-list');
const progressText = document.getElementById('progress-text'); 

const flagImg = document.getElementById('flag-img');
const hintDisplay = document.getElementById('hint-display');
const answerDisplay = document.getElementById('answer-display');
const actionButtons = document.getElementById('action-buttons');
const btnFlip = document.getElementById('btn-flip');
const btnHint = document.getElementById('btn-hint');
const btnWrong = document.getElementById('btn-wrong');
const btnCorrect = document.getElementById('btn-correct');
const placeholderText = document.querySelector('.flag-container div');
const btnStar = document.getElementById('btn-star');
const starFilter = document.getElementById('star-filter');
const btnUndo = document.getElementById('btn-undo'); 

// Pop-up Modal Elementen
const flagModal = document.getElementById('flag-modal');
const modalImg = document.getElementById('modal-img');
const modalCountryName = document.getElementById('modal-country-name');
const modalClose = document.getElementById('modal-close');

// Variabelen voor de game status
let currentDeck = [];
let currentFlag = null;
let hintLevel = 0; 
let isFlipped = false;
let initialDeckSize = 0; 
let lastCardState = null; 

// --- GEHEUGEN (LOCALSTORAGE VOOR STERRETJES) ---
function getStarredFlags() {
    const saved = localStorage.getItem('starredFlags');
    return saved ? JSON.parse(saved) : [];
}

function toggleStar(flagId, starElement = null) {
    let starred = getStarredFlags();
    if (starred.includes(flagId)) {
        starred = starred.filter(id => id !== flagId);
    } else {
        starred.push(flagId);
    }
    localStorage.setItem('starredFlags', JSON.stringify(starred));
    
    if (currentFlag && currentFlag.id === flagId) {
        updateStarUI();
    }
    
    if (starElement) {
        const isNowStarred = starred.includes(flagId);
        starElement.style.color = isNowStarred ? '#ffd700' : 'rgba(255, 255, 255, 0.3)';
    }

    const isNowStarredGlobal = starred.includes(flagId);
    modalStar.style.color = isNowStarredGlobal ? '#ffd700' : 'rgba(255, 255, 255, 0.3)';
}

function updateStarUI() {
    if (!currentFlag) return;
    const starred = getStarredFlags();
    if (starred.includes(currentFlag.id)) {
        btnStar.classList.add('active');
        btnStar.style.color = '#ffd700';
    } else {
        btnStar.classList.remove('active');
        btnStar.style.color = 'rgba(255, 255, 255, 0.3)';
    }
}
btnStar.addEventListener('click', () => toggleStar(currentFlag.id));

// --- GENEREER FILTERPOUL ---
function getSelectedFlags() {
    const checkedBoxes = Array.from(document.querySelectorAll('.filter-group input[type="checkbox"]:checked'));
    const selectedContinents = checkedBoxes.map(box => box.value);
    const starFilterActive = starFilter.checked;
    const starred = getStarredFlags();
    
    return flagData.filter(flag => {
        const matchesContinent = flag.continent.some(c => selectedContinents.includes(c));
        const matchesStar = starFilterActive ? starred.includes(flag.id) : true;
        return starFilterActive ? (matchesContinent && matchesStar) : matchesContinent;
    });
}

// --- BLADER MODUS LOGICA ---
btnBrowse.addEventListener('click', () => {
    const selectedFlags = getSelectedFlags();
    
    if (selectedFlags.length === 0) {
        alert('Je huidige selectie is leeg! Vink wat continenten of sterretjes aan.');
        return;
    }

    browseList.innerHTML = '';
    const starred = getStarredFlags();
    selectedFlags.sort((a, b) => a.country.localeCompare(b.country));

    selectedFlags.forEach(flag => {
        const card = document.createElement('div');
        card.style.cssText = "display: flex; flex-direction: column; background: rgba(255,255,255,0.03); padding: 8px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center; gap: 8px; width: 100%;";
        
        const img = document.createElement('img');
        img.src = flag.img;
        img.style.cssText = "width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); cursor: pointer; transition: transform 0.2s;";        
        
        img.addEventListener('mouseenter', () => img.style.transform = 'scale(1.03)');
        img.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
        
        img.addEventListener('click', () => {
            modalImg.src = flag.img;
            modalCountryName.textContent = flag.country;
            flagModal.dataset.currentFlagId = flag.id;
            
            const starredNow = getStarredFlags();
            modalStar.style.color = starredNow.includes(flag.id) ? '#ffd700' : 'rgba(255, 255, 255, 0.3)';
            flagModal.style.display = 'flex';
        });

        const infoRow = document.createElement('div');
        infoRow.style.cssText = "display: flex; width: 100%; align-items: flex-start; justify-content: space-between; gap: 5px; padding: 0 4px;";
        
        const name = document.createElement('span');
        name.textContent = flag.country;
        name.style.cssText = "font-size: 13px; font-weight: 500; text-align: left; line-height: 1.2; white-space: normal; word-break: break-word; max-width: 80%; color: rgba(255,255,255,0.9);";
        
        const starBtn = document.createElement('button');
        starBtn.textContent = '★';
        starBtn.style.cssText = "background: none; border: none; font-size: 18px; cursor: pointer; transition: color 0.2s; padding: 0; min-width: 18px; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;";
        starBtn.style.color = starred.includes(flag.id) ? '#ffd700' : 'rgba(255, 255, 255, 0.2)';
        
        starBtn.addEventListener('click', () => toggleStar(flag.id, starBtn));
        
        infoRow.appendChild(name);
        infoRow.appendChild(starBtn);
        
        card.appendChild(img);
        card.appendChild(infoRow);
        browseList.appendChild(card);
    });
    
    startScreen.style.maxWidth = '1200px';
    browseScreen.style.maxWidth = '1200px';
    
    startScreen.style.display = 'none';
    browseScreen.style.display = 'block';
});

modalClose.addEventListener('click', () => {
    flagModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === flagModal) {
        flagModal.style.display = 'none';
    }
});

btnBrowseBack.addEventListener('click', () => {
    startScreen.style.maxWidth = '500px';
    browseScreen.style.maxWidth = '500px';
    browseScreen.style.display = 'none';
    startScreen.style.display = 'block';
});

// --- START DE QUIZ MODUS ---
btnStart.addEventListener('click', () => {
    currentDeck = getSelectedFlags();
    
    if (currentDeck.length === 0) {
        alert('Vink op z\'n minst één geldig continent of sterretje aan!');
        return;
    }
    
    currentDeck.sort(() => Math.random() - 0.5);
    initialDeckSize = currentDeck.length; 
    lastCardState = null;
    btnUndo.style.display = 'none';

    startScreen.style.display = 'none';
    flashcardScreen.style.display = 'block';
    loadNextCard();
});

function loadNextCard() {
    if (currentDeck.length === 0) {
        alert('Lekker bezig! Je hebt alle vlaggen van deze sessie gehad.');
        location.reload(); 
        return;
    }

    currentFlag = currentDeck[0];
    isFlipped = false;
    hintLevel = 0;

    const currentCardNum = initialDeckSize - currentDeck.length + 1;
    progressText.textContent = `${currentCardNum} / ${initialDeckSize}`;

    flagImg.src = currentFlag.img;
    flagImg.style.display = 'block';
    placeholderText.style.display = 'none';
    hintDisplay.textContent = ''; 
    answerDisplay.textContent = currentFlag.country;
    
    answerDisplay.style.display = 'none';
    actionButtons.style.display = 'none';
    btnFlip.style.display = 'block';
    btnHint.style.display = 'block';

    updateStarUI();
}

function showHint() {
    if (isFlipped) return; 

    const word = currentFlag.country;
    let displayStr = '';

    if (hintLevel === 0) {
        for (let char of word) {
            displayStr += (char === ' ' || char === '-') ? char + ' ' : '_ ';
        }
        hintLevel++;
    } else if (hintLevel <= word.length) {
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (char === ' ' || char === '-') {
                displayStr += char + ' ';
            } else if (i < hintLevel) {
                displayStr += char + ' ';
            } else {
                displayStr += '_ ';
            }
        }
        hintLevel++;
    }
    
    hintDisplay.textContent = displayStr.trim();

    if (hintLevel > word.length) {
        setTimeout(() => {
            flipCard();
        }, 200); 
    }
}

function flipCard() {
    if (isFlipped) return;
    isFlipped = true;
    answerDisplay.style.display = 'block';
    actionButtons.style.display = 'flex';
    btnFlip.style.display = 'none';
    btnHint.style.display = 'none';
}

function handleSwipe(isCorrect) {
    if (!isFlipped) return;

    const card = currentDeck.shift(); 
    
    lastCardState = {
        card: card,
        wasCorrect: isCorrect
    };
    btnUndo.style.display = 'flex'; 

    if (!isCorrect) {
        let min = 5; 
        let max = 9;
        let insertPos = Math.floor(Math.random() * (max - min + 1)) + min;
        if (insertPos > currentDeck.length) {
            insertPos = currentDeck.length; 
        }
        currentDeck.splice(insertPos, 0, card);
    }

    loadNextCard();
}

function undoLastSwipe() {
    if (!lastCardState) return;

    if (!lastCardState.wasCorrect) {
        const idx = currentDeck.findIndex(c => c.id === lastCardState.card.id);
        if (idx > -1) {
            currentDeck.splice(idx, 1);
        }
    }

    currentDeck.unshift(lastCardState.card);
    lastCardState = null;
    btnUndo.style.display = 'none';
    loadNextCard();
}

// --- EVENT LISTENERS ---
btnHint.addEventListener('click', showHint);
btnFlip.addEventListener('click', flipCard);
flagImg.addEventListener('click', flipCard);
btnCorrect.addEventListener('click', () => handleSwipe(true));
btnWrong.addEventListener('click', () => handleSwipe(false));
btnUndo.addEventListener('click', undoLastSwipe); 

modalStar.addEventListener('click', () => {
    const flagId = flagModal.dataset.currentFlagId;
    if (!flagId) return;

    toggleStar(flagId);
    
    const starredNow = getStarredFlags();
    modalStar.style.color = starredNow.includes(flagId) ? '#ffd700' : 'rgba(255, 255, 255, 0.3)';
    
    btnBrowse.click();
});

// --- KEYBOARD SHORTCUTS ---
document.addEventListener('keydown', (e) => {
    if (flagModal.style.display === 'flex' && e.key === 'Escape') {
        flagModal.style.display = 'none';
        return;
    }

    if (flashcardScreen.style.display !== 'block') return;

    if (e.code === 'Space') {
        e.preventDefault(); 
        flipCard();
    } else if (e.code === 'KeyH') {
        showHint();
    } else if (e.code === 'ArrowRight' && isFlipped) {
        handleSwipe(true);
    } else if (e.code === 'ArrowLeft' && isFlipped) {
        handleSwipe(false);
    } else if (e.code === 'Backspace') {
        undoLastSwipe();
    }
});