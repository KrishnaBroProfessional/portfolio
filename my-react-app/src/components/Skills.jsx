import React, { useRef, useState } from 'react';
import { Brain, Code, Palette, Server, Database, Cloud, Cog, TestTube, Layers, Gamepad2 } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';
import { IconCloud } from './magicui/icon-cloud-new';
import { OrbitingCircles } from './magicui/orbiting-circles';
import NumberTicker from './ui/number-ticker';
import Footer from './Footer';

const Skills = ({ onBack }) => {
  const containerRef = useRef(null);
  const [isIconCloudEnabled, setIsIconCloudEnabled] = useState(true);

  // Helper function to safely get border colors with fallbacks
  const getBorderColors = (category) => {
    return {
      from: category.borderColors?.from || '#6366f1',
      to: category.borderColors?.to || '#a855f7'
    };
  };

  // Helper function to convert hex to rgba
  const hexToRgba = (hex, alpha = 1) => {
    if (!hex || hex.length !== 7) return `rgba(99, 102, 241, ${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const skillCategories = [
    {
      id: 'ai',
      title: 'AI Technology',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500',
      borderColors: { from: '#a855f7', to: '#ec4899' },
      skills: [
        { name: 'NLP', logo: 'https://cdn-icons-png.flaticon.com/512/8618/8618883.png' },
        { name: 'Computer Vision', logo: 'https://cdn-icons-png.flaticon.com/512/4341/4341134.png' },
        { name: 'LLM/LRM', logo: 'https://cdn-icons-png.flaticon.com/512/8637/8637101.png' },
        { name: 'GENAI', logo: 'https://cdn-icons-png.flaticon.com/512/11865/11865331.png' },
        { name: 'ML/DL', logo: 'https://cdn-icons-png.flaticon.com/512/8618/8618857.png' },
        { name: 'Analytics', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'Hugging Face', logo: 'https://cdn-icons-png.flaticon.com/512/8637/8637101.png' },
        { name: 'OpenAI', logo: 'https://cdn-icons-png.flaticon.com/512/11865/11865331.png' },
        { name: 'RAG Architecture', logo: 'https://cdn-icons-png.flaticon.com/512/8637/8637101.png' },
        { name: 'Multimodal AI', logo: 'https://cdn-icons-png.flaticon.com/512/4341/4341134.png' },
        { name: 'AI Guardrails', logo: 'https://cdn-icons-png.flaticon.com/512/11865/11865331.png' }
      ]
    },
    {
      id: 'fullstack',
      title: 'Fullstack Architecture',
      icon: Layers,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500',
      borderColors: { from: '#3b82f6', to: '#06b6d4' },
      skills: [
        { name: 'MEAN', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MERN', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'LAMP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'JAM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'J2EE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Microservices', logo: 'https://cdn-icons-png.flaticon.com/512/9496/9496773.png' },
        { name: 'Serverless', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' },
        { name: 'Retry Pattern', logo: 'https://cdn-icons-png.flaticon.com/512/9496/9496773.png' },
        { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        { name: 'REST API', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'WebSockets', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
        { name: 'Event-Driven', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' },
        { name: 'Kafka', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
        { name: 'Eureka', logo: 'https://cdn-icons-png.flaticon.com/512/9496/9496773.png' },
        { name: 'Circuit Breaker', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' },
        { name: 'Load Balancing', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'API Gateway', logo: 'https://cdn-icons-png.flaticon.com/512/9496/9496773.png' }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Technology',
      icon: Palette,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500',
      borderColors: { from: '#22c55e', to: '#10b981' },
      skills: [
        { name: 'SCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'Svelte', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'JSP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
        { name: 'Material-UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
        { name: 'Axios', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
        { name: 'SweetAlert', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' }
      ]
    },
    {
      id: 'design',
      title: 'Prototype Designing',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500',
      borderColors: { from: '#ec4899', to: '#f43f5e' },
      skills: [
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Balsamiq', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' },
        { name: 'Adobe XD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' },
        { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
        { name: 'Sketch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' },
        { name: 'InVision', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' },
        { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
        { name: 'Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Technology',
      icon: Server,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500',
      borderColors: { from: '#f97316', to: '#ef4444' },
      skills: [
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
        { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'KOA', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
        { name: 'Spring Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Hibernate', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
        { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' }
      ]
    },
    {
      id: 'languages',
      title: 'Core Languages',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500',
      borderColors: { from: '#6366f1', to: '#a855f7' },
      skills: [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Go Lang', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Groovy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg' },
        { name: 'Rust', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg' },
        { name: 'Mojo', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' },
        { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Scala', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg' }
      ]
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Observability',
      gradient: 'from-purple-500 to-pink-500',
      icon: '📊',
      skills: [
        { name: 'Dynatrace', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'Splunk', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'Zabbix', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'ElasticSearch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' },
        { name: 'Azure Monitoring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'AWS CloudWatch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'New Relic', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'Grafana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
        { name: 'Prometheus', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
        { name: 'Zipkin', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'Jaeger', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' }
      ]
    },
    {
      id: 'databases',
      title: 'Databases & Storage',
      gradient: 'from-green-500 to-teal-500',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
        { name: 'Amazon RDS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Azure CosmosDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'PineConeDB', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'Elastic vectorDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' },
        { name: 'DynamoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'CouchDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-original.svg' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud',
      icon: Cloud,
      color: 'from-sky-500 to-blue-500',
      bgColor: 'bg-sky-500',
      borderColors: { from: '#0ea5e9', to: '#3b82f6' },
      skills: [
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
        { name: 'Oracle Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
        { name: 'IBM', logo: 'https://cdn-icons-png.flaticon.com/512/882/882681.png' },
        { name: 'Salesforce', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' },
        { name: 'IICS', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'Kong', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
        { name: 'Heroku', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg' },
        { name: 'CloudFlare', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg' },
        { name: 'Vercel', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' },
        { name: 'Netlify', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' }
      ]
    },
    {
      id: 'devsecops',
      title: 'DevSecOps & Security',
      gradient: 'from-red-500 to-orange-500',
      icon: '🔒',
      skills: [
        { name: 'TwistLock', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'Azure Defenders', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'Groovy Scripting', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg' },
        { name: 'OWASP ZAP', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'Veracode', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'SonarQube', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg' },
        { name: 'Checkmarx', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: Cog,
      color: 'from-gray-500 to-slate-500',
      bgColor: 'bg-gray-500',
      borderColors: { from: '#6b7280', to: '#64748b' },
      skills: [
        { name: 'Github Actions', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'NewRelic', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
        { name: 'Azure Workflow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'FlagSmith', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' },
        { name: 'AKS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'UNIX', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Podman', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
        { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'ArgoCD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg' },
        { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
        { name: 'Ansible', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
        { name: 'GitLab CI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
        { name: 'CircleCI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg' },
        { name: 'Consul', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/consul/consul-original.svg' },
        { name: 'Zookeeper', logo: 'https://cdn-icons-png.flaticon.com/512/9496/9496773.png' }
      ]
    },
    {
      id: 'testing',
      title: 'Testing Frameworks',
      icon: TestTube,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500',
      borderColors: { from: '#f59e0b', to: '#f97316' },
      skills: [
        { name: 'Playwright', logo: 'https://playwright.dev/img/playwright-logo.svg' },
        { name: 'Playwright + Allure', logo: 'https://playwright.dev/img/playwright-logo.svg' },
        { name: 'SauceLabs', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'Selenium + Cucumber', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
        { name: 'Cypress', logo: 'https://cdn-icons-png.flaticon.com/512/9496/9496773.png' },
        { name: 'Cucumber Framework', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' },
        { name: 'POSTMAN Automation', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Newman Library', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
        { name: 'Junit + Mockito', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
        { name: 'Karma + Jasmine', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg' },
        { name: 'Jest + Enzyme', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
        { name: 'TOSCA', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' },
        { name: 'WireMock Chaos Testing', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'PyTest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg' },
        { name: 'TestNG', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' },
        { name: 'Mocha + Chai', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg' }
      ]
    },
    {
      id: 'gamedev',
      title: 'Game Development',
      icon: Gamepad2,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500',
      borderColors: { from: '#ef4444', to: '#f97316' },
      skills: [
        { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'Pygame', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Unreal Engine', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
        { name: 'Unity Engine', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
        { name: 'Three.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
        { name: 'Blender', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
        { name: 'OpenGL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg' },
        { name: 'WebGL', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' }
      ]
    },
    {
      id: 'others',
      title: 'Others',
      icon: Layers,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500',
      borderColors: { from: '#10b981', to: '#14b8a6' },
      skills: [
        { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
        { name: 'Android Studio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
        { name: 'Electron.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg' },
        { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Xamarin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg' },
        { name: 'Ionic', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
        { name: 'Apache Cordova', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' },
        { name: 'PWA', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
        { name: 'Mulvis', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' }
      ]
    }
  ];

  // Map skills to Simple Icons slugs for MagicUI IconCloud
  const iconSlugs = [
    // Programming Languages
    "python", "java", "javascript", "typescript", "go", "rust", "cplusplus", "csharp", "php", "scala",
    // Frontend
    "react", "vue-dot-js", "angular", "svelte", "nextdotjs", "tailwindcss", "sass", "bootstrap",
    // Backend
    "spring", "flask", "laravel", "express", "django", "fastapi", "nestjs",
    // Databases
    "mysql", "mongodb", "postgresql", "redis", "sqlite", "neo4j", "firebase",
    // Cloud
    "amazonaws", "microsoftazure", "googlecloud", "oracle", "heroku", "vercel", "netlify",
    // DevOps
    "docker", "kubernetes", "jenkins", "githubactions", "terraform", "ansible", "gitlab", "circleci",
    // Tools & Testing
    "git", "github", "jest", "cypress", "selenium", "playwright",
    // AI/ML
    "tensorflow", "pytorch", "opencv", "jupyter", "openai",
    // Game Development
    "unity", "unrealengine", "blender", "opengl",
    // Design
    "figma", "adobexd", "canva", "sketch", "adobephotoshop", "adobeillustrator",
    // Mobile
    "reactnative", "flutter", "ionic", "xamarin", "kotlin", "androidstudio",
    // Additional
    "nodedotjs", "graphql", "apachekafka", "elasticsearch", "consul"
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-30 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        ← Back to Home
      </button>

      {/* Toggle Icon Cloud Button */}
      <button
        onClick={() => setIsIconCloudEnabled(!isIconCloudEnabled)}
        className="fixed top-8 right-8 z-30 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
      >
        <Cloud className="w-4 h-4" />
        {isIconCloudEnabled ? 'Disable' : 'Enable'} Icon Cloud
      </button>

      {/* Page content */}
      <div ref={containerRef} className="flex flex-col items-center justify-start min-h-screen px-2 py-20">
        {/* Page title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of technologies, frameworks, and tools I've mastered throughout my journey
          </p>
        </div>

        {/* Skills Grid - 2 Column Satellite Layout or Icon Cloud */}
        <div className="max-w-full w-full px-2">
          {isIconCloudEnabled ? (
            /* Icon Cloud View */
            <div className="flex flex-col items-center">
              <div className="relative overflow-hidden w-full max-w-4xl">
                <IconCloud iconSlugs={iconSlugs} />
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Interactive Skill Cloud</h3>
                <p className="text-gray-300">
                  Explore all <NumberTicker value={iconSlugs.length} className="inline text-purple-400 font-semibold" delay={0.3} /> technologies in an interactive 3D cloud
                </p>
              </div>
            </div>
          ) : (
            /* Orbiting Circles Layout */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">{skillCategories.map((category, categoryIndex) => {
              const containerSize = 800;
              
              // Distribute skills across multiple orbit rings for better spacing
              const distributeSkillsInRings = (skills) => {
                const rings = [];
                const skillsPerRing = [4, 6, 8, 10]; // Progressive ring sizes
                let currentIndex = 0;
                
                for (let ringIndex = 0; ringIndex < 4 && currentIndex < skills.length; ringIndex++) {
                  const skillsInThisRing = Math.min(skillsPerRing[ringIndex], skills.length - currentIndex);
                  rings.push(skills.slice(currentIndex, currentIndex + skillsInThisRing));
                  currentIndex += skillsInThisRing;
                }
                
                return rings;
              };
              
              const skillRings = distributeSkillsInRings(category.skills);
              
              return (
                <div
                  key={category.id}
                  className="relative mb-16 flex justify-center"
                  style={{
                    animationDelay: `${categoryIndex * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Container for the orbiting layout */}
                  <div 
                    className="relative flex items-center justify-center"
                    style={{
                      width: `${containerSize}px`,
                      height: `${containerSize}px`,
                      minHeight: `${containerSize}px`,
                      minWidth: `${containerSize}px`
                    }}
                  >
                    {/* Category Title Circle - Absolute Center */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                      <div
                        className="relative flex items-center justify-center w-32 h-32 rounded-full shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${getBorderColors(category).from}, ${getBorderColors(category).to})`,
                          boxShadow: `0 0 40px ${getBorderColors(category).from}60`
                        }}
                      >
                        {/* Border Beam for Header */}
                        <BorderBeam
                          duration={20 + categoryIndex * 3}
                          delay={categoryIndex * 0.5}
                          colorFrom={getBorderColors(category).from}
                          colorTo={getBorderColors(category).to}
                          borderWidth={3}
                        />
                        
                        <div className="text-center px-2">
                          {typeof category.icon === 'string' ? (
                            <div className="w-6 h-6 lg:w-8 lg:h-8 text-white mb-1 lg:mb-2 mx-auto flex items-center justify-center text-lg lg:text-xl">
                              {category.icon}
                            </div>
                          ) : (
                            <category.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white mb-1 lg:mb-2 mx-auto" />
                          )}
                          <h3 className="text-white font-bold text-xs lg:text-sm leading-tight">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Orbiting Skills Rings */}
                    {skillRings.map((ringSkills, ringIndex) => {
                      const baseRadii = [140, 190, 240, 290]; // Well-spaced orbit radii
                      const ringRadius = baseRadii[ringIndex];
                      const ringDuration = 30 + (ringIndex * 15); // Slower speeds: 30s, 45s, 60s, 75s
                      const isReverse = ringIndex % 2 === 1; // Alternate direction for visual appeal
                      
                      return (
                        <OrbitingCircles
                          key={`ring-${ringIndex}`}
                          className="size-[140px] border-none bg-transparent"
                          radius={ringRadius}
                          duration={ringDuration}
                          reverse={isReverse}
                          path={true}
                        >
                          {ringSkills.map((skill, skillIndex) => (
                            <div
                              key={`${ringIndex}-${skillIndex}`}
                              className="group cursor-pointer"
                            >
                              {/* Skill Pill */}
                              <div
                                className="flex items-center bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-white/30 hover:shadow-2xl overflow-hidden relative pl-0 pr-3 py-2"
                                style={{
                                  minWidth: '120px',
                                  height: '36px',
                                  boxShadow: hexToRgba(getBorderColors(category).from, 0),
                                  transition: 'all 0.3s ease, box-shadow 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.boxShadow = `0 0 20px ${getBorderColors(category).from}60`;
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.boxShadow = hexToRgba(getBorderColors(category).from, 0);
                                }}
                              >
                                {/* Border Beam for Skill Pill */}
                                <BorderBeam
                                  duration={15 + skillIndex * 2}
                                  delay={(ringIndex * 2) + (skillIndex * 0.5)}
                                  colorFrom={getBorderColors(category).from}
                                  colorTo={getBorderColors(category).to}
                                  borderWidth={2}
                                />
                                
                                {/* Logo */}
                                <div className="flex-shrink-0 w-7 h-7 bg-white rounded-full flex items-center justify-center mr-2 ml-1">
                                  <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                                    onError={(e) => {
                                      e.target.src = 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png';
                                    }}
                                  />
                                </div>
                                
                                {/* Text */}
                                <span className="text-white text-sm font-medium group-hover:text-purple-200 transition-colors duration-300 truncate flex-1">
                                  {skill.name}
                                </span>
                              </div>
                            </div>
                          ))}
                        </OrbitingCircles>
                      );
                    })}

                    {/* Category Progress Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center z-20">
                      <div className={`h-1 w-24 lg:w-32 rounded-full bg-gradient-to-r`} 
                           style={{
                             background: `linear-gradient(to right, ${getBorderColors(category).from}, ${getBorderColors(category).to})`
                           }}>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          )}
        </div>

        {/* Bottom Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              <NumberTicker value={160} className="text-3xl font-bold text-purple-400" delay={0.5} />+
            </div>
            <div className="text-gray-300 text-sm">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">
              <NumberTicker value={14} className="text-3xl font-bold text-pink-400" delay={0.8} />
            </div>
            <div className="text-gray-300 text-sm">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              <NumberTicker value={5} className="text-3xl font-bold text-blue-400" delay={1.1} />+
            </div>
            <div className="text-gray-300 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
            <div className="text-gray-300 text-sm">Learning</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Innovation
            </h3>
            <p className="text-gray-300 mb-6">
              Technology evolves rapidly, and so do I. These skills represent my current expertise, but I'm always exploring new technologies and frameworks.
            </p>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore More Sections
            </button>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Orbiting animations are handled by the OrbitingCircles component */
        .animate-orbit {
          animation: var(--animate-orbit);
        }
      `}</style>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Skills;
