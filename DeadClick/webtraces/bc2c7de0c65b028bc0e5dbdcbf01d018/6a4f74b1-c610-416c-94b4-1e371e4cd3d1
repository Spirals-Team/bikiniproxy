
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (PoloLoginInfoWrapper == null) var PoloLoginInfoWrapper = {};
PoloLoginInfoWrapper._path = '/dwrShpg';
PoloLoginInfoWrapper.getCurrentSalesAssociate = function(callback) {
  dwr.engine._execute(PoloLoginInfoWrapper._path, 'PoloLoginInfoWrapper', 'getCurrentSalesAssociate', callback);
}
PoloLoginInfoWrapper.getUserNamesEmail = function(callback) {
  dwr.engine._execute(PoloLoginInfoWrapper._path, 'PoloLoginInfoWrapper', 'getUserNamesEmail', callback);
}
