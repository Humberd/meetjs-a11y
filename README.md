# A11y

PROD ---> https://meetjs-accessibility.firebaseapp.com/

## Cel

Celem prezentacji jest zachęcenie słuchaczy do aktywnego korzystania z
natywnych elementow i atrybutow HTML pozwalających na korzystanie ze
strony przez niepełnosprawnych.  

## Plan prezentacji

1. Pokazanie ladnej i dzialajacej strony.
2. Przejechanie strony jakims benchmarkiem do A11y i stwierdzenie, ze strona to jednak ssie pale.
3. Udowodnienie, ze tak faktycznie jest poprzez przejechanie strony screen readerem.
4. Zafixowanie strony
5. ???
6. Profit


## Jakie issuesy pokazac na stronie?

* Form [link](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)
  * fieldset, legend
  * input with label 
  * `<label for="username">Name: <abbr title="required">*</abbr></label>`
  * role="presentation" nie czyta obrazka
  * [link](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript#Keeping_it_unobtrusive)
  `<div class="errors" role="alert" aria-relevant="all">` - errory w walidacji pola

* Img [link](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#Text_alternatives)
  * alt
  * empty alt [link](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#Empty_alt_attributes)
  * longdesc
* Button [link](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
  > https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role  
  > If using role="button" instead of the semantic <button> or <input type="button"> elements, you will need to make the element focusable and have to define event handlers for click and keydown events, including the Enter and Space keys, in order to process the user's input. See the official WAI-ARIA example code.
  * div jako button
  * :focus, :active
  * button, ktory tak na prawde ma funkcjonalnosc linku
  * icon-button, ktory nie jest dobrze opisany.
  * nazwa/opis powinien byc znaczący, bo "Click here" nic nie mowi screen readerow 
* div, ktory wyglada jak h1,h2,h3,h4,h5
* Selectow w htmlu nie mozna stylowac zbyt dobrze, wiec jesli chcesz tworzyc wlasny, to musisz bardzo uwazac zeby byl accessible, albo uzyc gotowej biblioteki
* brak header, main, footer, navigation, aside,
* brak article, section, itp.
* Tabela [link](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced):
  * dodanie tagu caption
  * thead, tfoot, tbody - nie powoduja czytania inaczej przez screen readery
  * scope="col", scope="row"
* lista ktora jest divem zamiast ul
* bloki tekstu nie sa w tagu p
* WAI-ARIA [link](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
  * `role="..."`
  * aria-labelledby
  * aria-label
  * aria-required
  * aria-disabled
  * aria-live, aria-atomic="true", aria-relevant (notification about dynamic content) 
  [link](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics#Dynamic_content_updates)
  (The following example uses role=alert which is equivalent to using aria-live=assertive.)
  * [link](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics#When_should_you_use_WAI-ARIA)

* em, strong, abbr jako oznaczenie kawalku kodu w tekscie
* focusTrap [link](https://css-tricks.com/a-css-approach-to-trap-focus-inside-of-an-element/)
* css grid nie zmienia orderu focusowania
* labelki na chartach

## Links
https://www.digitala11y.com/accessibility-plug-ins-ie-chrome-firefox-browsers/ -a11y browser extensions
https://www.w3.org/TR/wai-aria-practices/examples/landmarks/navigation.html - aria components
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role - dialog
https://support.microsoft.com/en-us/help/22806/windows-10-narrator-keyboard-commands-touch-gestures
