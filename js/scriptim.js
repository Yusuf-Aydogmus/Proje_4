function isValid(frm)
{
    var kadi = frm.kadi.value;
    var sifre1 = frm.sifre1.value;
    var sifre2 = frm.sifre2.value;
    var email = frm.email.value;
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if ( kadi==null || kadi=="" || kadi.length < 4 )
    {
        alert("Kullanıcı adı 4 karakterden az olamaz");
        return false;
    }
    if ( sifre1 == null || sifre1 == "" || sifre2 == null || sifre2 == "")
    {
        alert("Şifreyi boş bırakmayın");
        return false;
    }
    if ( !(sifre1 == sifre2) )
    {
        alert("Şifreler eşleşmiyor");
        return false;
    }
    if ( atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length )
    {
        alert("Geçerli email adresi girin");
        return false;
    }      
    return true;
}