import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface detailsContent {
  image: string;
  title: string;
  body: string;
}
@Component({
  selector: 'app-what-we-do-details',
  templateUrl: './what-we-do-details.component.html',
  styleUrls: ['./what-we-do-details.component.scss'],
})
export class WhatWeDoDetailsComponent implements OnInit {
  contentKeys = [
    {
      id: 'ausländischen-Unternehmen',
      content: {
        image: '../../../assets/was-wir-tun/foregin-company.png',
        title: 'Begleitung der ausländischen Unternehmen',
        body: `Sie haben eine Geschäftsidee und möchten mit der auf dem Markt einsteigen? Sie wissen aber nicht, wie Sie
        das bewerkstelligen sollen?
        Unsere Tipps können helfen: Ob Sie sich bereits entschieden haben, das eigene Unternehmen zu gründen, oder
        noch darüber nachdenken, womit Sie sich selbstständig machen wollen. Wir kennen die nötigen Etappen und
        begleiten Sie gerne auf Ihrem Weg zur Existenzgründung.`,
      },
    },
    {
      id: 'unterstützung-bei-firmengründung',
      content: {
        image: '../../../assets/was-wir-tun/founding-company.png',
        title: 'Unterstützung bei Firmengründung',
        body: `Finanzamt, Gewerbeamt, IHK, Handelsregister, Berufsgenossenschaft: Auf dem Weg zur Unternehmensgründung stehen viele Gänge zu Behörden und Institutionen an. Wie viele, hängt von der gewählten Rechtsform ab. Und die sollten Sie sorgsam wählen, denn mit der Wahl der Rechtsform entscheiden Sie auch über den Gründungsaufwand, die Besteuerung, den Verwaltungsaufwand und Ihr persönliches Haftungsrisiko.`,
      },
    },
    {
      id: 'suchen-nach-geeigneten-kooperationspartner-in-Ägypten',
      content: {
        image: '../../../assets/was-wir-tun/egy-ger-flag.png',
        title: 'Suchen nach geeigneten Kooperationspartner in Ägypten',
        body: `Unter einer Kooperation wird der strategische Zusammenschluss verschiedener Personen oder Institutionen verstanden, die auf diese Weise anstreben, ein gemeinsames Ziel zu erreichen. Kooperationen gehören zum Alltag vieler Unternehmen. Die Gründe für das Eingehen einer Kooperation sind sehr vielfältig. Egal, welche Motive dafür ausschlaggebend sind, sollte man immer die Chancen sowie die Risiken einer Zusammenarbeit gegenüberstellen und gemeinsam betrachten. Wenn Sie im Ausland Fuß fassen möchten, kann sich eine Kooperation für Sie besonders lohnen. Schließlich können Sie dann vom Know-how Ihres ausländischen Partners profitieren. Wir begleiten und beraten Sie und helfen Ihnen bei den Entscheidungen.`,
      },
    },
    {
      id: 'internationale-steuerangelegenheit',
      content: {
        image: '../../../assets/was-wir-tun/tax.png',
        title: 'Internationale Steuerangelegenheit',
        body: `Wir betreuen Sie schon vor der Existenzgründung, beraten Sie bei der Findung der geeigneten Rechtsform des neu zu gründenden Unternehmens. Durch laufende Verbuchung Ihrer Geschäftsvorfälle können wir Sie anhand aktueller Zahlen aus der betriebswirtschaftlichen Auswertung beraten und die Zukunft Ihres jungen Unternehmens mitgestalten. Aufgrund unserer langjährigen Kooperation mit einer Steuerberaterkanzlei können auf Wunsch auch die Jahresabschlüsse und Steuererklärungen erstellt werden.`,
      },
    },
    {
      id: 'unterstützung-beim-Erstellen-eines-businessplans',
      content: {
        image: '../../../assets/was-wir-tun/busniess-plan.png',
        title: 'Unterstützung beim Erstellen eines Businessplans',
        body: `Der Businessplan ist die Basis einer soliden Unternehmensgründung. Mit einem sorgfältig ausgearbeiteten Geschäftsplan können Sie Banken und andere Geldgeber von Ihrer Geschäftsidee überzeugen. Vor allem aber hilft dieser Ihnen dabei, alle Aspekte Ihres Gründungsvorhabens kritisch zu beleuchten. Beim Erstellen des Businessplans setzen Sie sich sorgfältig mit allen wichtigen Einzelheiten, Chancen und Risiken Ihres Start-ups auseinander. Am Ende dient er Ihnen als Anleitung und Fahrplan zum Erfolg: Mit dem fertig erstellten Businessplan kennen Sie Ihre konkreten Ziele und wissen, auf welchem Weg sie erreichbar sind.`,
      },
    },
    {
      id: 'Juristische-Übersetzung',
      content: {
        image: '../../../assets/was-wir-tun/busniess-plan.png',
        title: 'Juristische Übersetzung',
        body: `Sie müssen einem Kunden in Ägypten (in arabischsprachigen Ländern) Ihre AGBs zur Annahme übersenden, er bittet Sie aber um eine arabische Version? Ihre Rechtsabteilung hat einen Distributionsvertrag in deutscher Sprache verfasst, Ihr Geschäftspartner versteht aber nur arabisch? Ihr Mandant hat gegen eine ägyptische Firma geklagt oder wurde von einer verklagt, Sie können aber Schriftsätze und Gerichtsurkunden des Prozessgegners nicht verstehen? Sie brauchen eine beglaubigte Übersetzung eines Dokuments, Sie wissen aber nicht einmal, was damit gemeint ist? Wir übersetzen in den Sprachrichtungen Deutsch – Arabisch und Arabisch – Deutsch sämtliche Rechtskorrespondenz, wie z.B. Gründungsurkunden, Handelsregisterauszüge, Verträge, Urteile, Anwaltliche Schreiben, Patente, Klageschriften, aber auch Geschäftsbriefe und Sitzungsprotokolle. Und das mit der gleichen Sorgfalt wie sie verfasst wurden.`,
      },
    },
  ];

  pageContent: detailsContent[] = [];

  constructor(private _ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.pageContent.push(
      this.contentKeys.filter(
        (item) => item.id == this._ActivatedRoute.snapshot.params['id']
      )[0].content
    );
  }
}
