import { Component } from '@angular/core';

@Component({
    selector: 'app-nosotros',
    standalone: true,
    imports: [],
    templateUrl: './nosotros.component.html',
    styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
    public historiaParrafo1: string = "Proveedora Integral Sociedad Anónima. Una empresa joven " +
        "constituida en el 2018. PISA ofrece distintos servicios destinados a satisfacer las " +
        "necesidades de las empresas más exigentes del mercado. Con un plantel de ingenieros " +
        "altamente capacitados y con vasta experiencia en el rubro, y un enfoque personalizado que " +
        "se ajusta a las necesidades de cada cliente, ofreciendo soluciones eficientes y eficaces que " +
        "satisfacen las necesidades de nuestros clientes en diversas industrias. ";

    public historiaParrafo2: string = "En PISA, nos especializamos en importaciones, venta de equipos, maquinarias, repuestos, " +
        "insumos e instrumentos, además de brindar servicios de ingeniería, asesoramiento " +
        "técnico, desarrollo de proyectos en tiempo y forma, llave en mano, con un constante " +
        "seguimiento, supervisión y coordinación para alcanzar los objetivos propuestos. " +
        "La combinación de nuestros servicios nos permite ofrecer soluciones completas empleando " +
        "los recursos tecnológicos más avanzados para adaptarnos a la dinámica cambiante del " +
        "mercado y satisfacer las demandas de nuestros clientes.";

    public historiaParrafo3: string = "Gracias por considerar a PISA como su proveedora de servicios electromecánicos, ingeniería " +
        "general, suministros y repuestos industriales. Esperamos con interés la posibilidad de " +
        "colaborar en futuros proyectos. Estamos comprometidos a establecer vínculos fuertes y " +
        "duraderos en el ámbito comercial y a trabajar juntos para el éxito de su empresa." +

        "Si está interesado en conocer más sobre nuestros servicios o concretar una reunión, no " +
        "dude en ponerse en contacto con nosotros";

    
}
