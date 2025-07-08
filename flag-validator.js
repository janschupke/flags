#!/usr/bin/env node

/**
 * Flag Database Validator
 * Validates flag images and metadata for the Flags Quiz application
 */

const fs = require('fs');
const path = require('path');

// Official flag data for validation
const OFFICIAL_FLAGS = {
    // Europe
    'albania': { name: 'Albania', capital: 'Tirana', continent: 'Europe', government: 'Republic', language: 'Albanian' },
    'austria': { name: 'Austria', capital: 'Vienna', continent: 'Europe', government: 'Republic', language: 'German' },
    'belgium': { name: 'Belgium', capital: 'Brussels', continent: 'Europe', government: 'Monarchy', language: 'French, German, Dutch' },
    'britain': { name: 'Great Britain', capital: 'London', continent: 'Europe', government: 'Constitutional monarchy', language: 'English' },
    'croatia': { name: 'Croatia', capital: 'Zagreb', continent: 'Europe', government: 'Republic', language: 'Croatian' },
    'czech': { name: 'Czech Republic', capital: 'Prague', continent: 'Europe', government: 'Republic', language: 'Czech' },
    'estonia': { name: 'Estonia', capital: 'Tallinn', continent: 'Europe', government: 'Republic', language: 'Estonian' },
    'finland': { name: 'Finland', capital: 'Helsinki', continent: 'Europe', government: 'Republic', language: 'Finnish, Swedish' },
    'france': { name: 'France', capital: 'Paris', continent: 'Europe', government: 'Republic', language: 'French' },
    'germany': { name: 'Germany', capital: 'Berlin', continent: 'Europe', government: 'Republic', language: 'German' },
    'greece': { name: 'Greece', capital: 'Athens', continent: 'Europe', government: 'Republic', language: 'Greek' },
    'hungary': { name: 'Hungary', capital: 'Budapest', continent: 'Europe', government: 'Republic', language: 'Hungarian' },
    'iceland': { name: 'Iceland', capital: 'Reykjavik', continent: 'Europe', government: 'Republic', language: 'Icelandic' },
    'italy': { name: 'Italy', capital: 'Rome', continent: 'Europe', government: 'Republic', language: 'Italian' },
    'latvia': { name: 'Latvia', capital: 'Riga', continent: 'Europe', government: 'Republic', language: 'Latvian' },
    'luxembourg': { name: 'Luxembourg', capital: 'Luxembourg', continent: 'Europe', government: 'Constitutional monarchy', language: 'French, Luxembourgish, German' },
    'macedonia': { name: 'North Macedonia', capital: 'Skopje', continent: 'Europe', government: 'Republic', language: 'Macedonian' },
    'netherlands': { name: 'Netherlands', capital: 'Amsterdam', continent: 'Europe', government: 'Constitutional monarchy', language: 'Dutch' },
    'norway': { name: 'Norway', capital: 'Oslo', continent: 'Europe', government: 'Constitutional monarchy', language: 'Norwegian' },
    'poland': { name: 'Poland', capital: 'Warsaw', continent: 'Europe', government: 'Republic', language: 'Polish' },
    'portugal': { name: 'Portugal', capital: 'Lisbon', continent: 'Europe', government: 'Republic', language: 'Portuguese' },
    'russia': { name: 'Russian Federation', capital: 'Moscow', continent: 'Europe', government: 'Republic', language: 'Russian' },
    'slovakia': { name: 'Slovakia', capital: 'Bratislava', continent: 'Europe', government: 'Republic', language: 'Slovak' },
    'spain': { name: 'Spain', capital: 'Madrid', continent: 'Europe', government: 'Constitutional monarchy', language: 'Spanish' },
    'sweden': { name: 'Sweden', capital: 'Stockholm', continent: 'Europe', government: 'Constitutional monarchy', language: 'Swedish' },
    'switzerland': { name: 'Switzerland', capital: 'Bern', continent: 'Europe', government: 'Republic', language: 'German, French, Romansh, Italian' },
    'ukraine': { name: 'Ukraine', capital: 'Kyiv', continent: 'Europe', government: 'Republic', language: 'Ukrainian' },
    
    // Asia
    'afghanistan': { name: 'Afghanistan', capital: 'Kabul', continent: 'Asia', government: 'Islamic republic', language: 'Pashto, Dari' },
    'australia': { name: 'Australia', capital: 'Canberra', continent: 'Oceania', government: 'Constitutional monarchy', language: 'English' },
    'china': { name: 'China', capital: 'Beijing', continent: 'Asia', government: 'Communist state', language: 'Chinese' },
    'india': { name: 'India', capital: 'New Delhi', continent: 'Asia', government: 'Republic', language: 'Hindi, English' },
    'iraq': { name: 'Iraq', capital: 'Baghdad', continent: 'Asia', government: 'Republic', language: 'Arabic, Kurdish' },
    'israel': { name: 'Israel', capital: 'Jerusalem', continent: 'Asia', government: 'Republic', language: 'Hebrew, Arabic' },
    'japan': { name: 'Japan', capital: 'Tokyo', continent: 'Asia', government: 'Constitutional monarchy', language: 'Japanese' },
    'jordan': { name: 'Jordan', capital: 'Amman', continent: 'Asia', government: 'Constitutional monarchy', language: 'Arabic' },
    'kazakhstan': { name: 'Kazakhstan', capital: 'Nur-Sultan', continent: 'Asia', government: 'Presidential republic', language: 'Kazakh, Russian' },
    'korea': { name: 'South Korea', capital: 'Seoul', continent: 'Asia', government: 'Republic', language: 'Korean' },
    'kuwait': { name: 'Kuwait', capital: 'Kuwait City', continent: 'Asia', government: 'Constitutional monarchy', language: 'Arabic' },
    'kyrgyzstan': { name: 'Kyrgyzstan', capital: 'Bishkek', continent: 'Asia', government: 'Republic', language: 'Kyrgyz, Russian' },
    'malaysia': { name: 'Malaysia', capital: 'Kuala Lumpur', continent: 'Asia', government: 'Constitutional monarchy', language: 'Malay' },
    'mongolia': { name: 'Mongolia', capital: 'Ulaanbaatar', continent: 'Asia', government: 'Republic', language: 'Mongolian' },
    'nepal': { name: 'Nepal', capital: 'Kathmandu', continent: 'Asia', government: 'Republic', language: 'Nepali' },
    'philippines': { name: 'Philippines', capital: 'Manila', continent: 'Asia', government: 'Republic', language: 'English, Filipino' },
    'qatar': { name: 'Qatar', capital: 'Doha', continent: 'Asia', government: 'Absolute monarchy', language: 'Arabic' },
    'saudi': { name: 'Saudi Arabia', capital: 'Riyadh', continent: 'Asia', government: 'Absolute monarchy', language: 'Arabic' },
    'singapore': { name: 'Singapore', capital: 'Singapore', continent: 'Asia', government: 'Republic', language: 'English, Malay, Tamil, Mandarin' },
    'taiwan': { name: 'Taiwan', capital: 'Taipei', continent: 'Asia', government: 'Republic', language: 'Mandarin' },
    'uzbekistan': { name: 'Uzbekistan', capital: 'Tashkent', continent: 'Asia', government: 'Republic', language: 'Uzbek' },
    'vietnam': { name: 'Vietnam', capital: 'Hanoi', continent: 'Asia', government: 'Communist state', language: 'Vietnamese' },
    
    // Americas
    'argentina': { name: 'Argentina', capital: 'Buenos Aires', continent: 'South America', government: 'Republic', language: 'Spanish' },
    'bahamas': { name: 'Bahamas', capital: 'Nassau', continent: 'North America', government: 'Constitutional monarchy', language: 'English' },
    'bolivia': { name: 'Bolivia', capital: 'La Paz', continent: 'South America', government: 'Republic', language: 'Spanish' },
    'brazil': { name: 'Brazil', capital: 'Brasília', continent: 'South America', government: 'Republic', language: 'Portuguese' },
    'canada': { name: 'Canada', capital: 'Ottawa', continent: 'North America', government: 'Constitutional monarchy', language: 'English, French' },
    'chile': { name: 'Chile', capital: 'Santiago', continent: 'South America', government: 'Republic', language: 'Spanish' },
    'cuba': { name: 'Cuba', capital: 'Havana', continent: 'North America', government: 'Socialist republic', language: 'Spanish' },
    'domrep': { name: 'Dominican Republic', capital: 'Santo Domingo', continent: 'North America', government: 'Republic', language: 'Spanish' },
    'ecuador': { name: 'Ecuador', capital: 'Quito', continent: 'South America', government: 'Republic', language: 'Spanish' },
    'haiti': { name: 'Haiti', capital: 'Port-au-Prince', continent: 'North America', government: 'Republic', language: 'French, Haitian Creole' },
    'jamaica': { name: 'Jamaica', capital: 'Kingston', continent: 'North America', government: 'Constitutional monarchy', language: 'English' },
    'mexico': { name: 'Mexico', capital: 'Mexico City', continent: 'North America', government: 'Republic', language: 'Spanish' },
    'peru': { name: 'Peru', capital: 'Lima', continent: 'South America', government: 'Republic', language: 'Spanish' },
    'uruguay': { name: 'Uruguay', capital: 'Montevideo', continent: 'South America', government: 'Republic', language: 'Spanish' },
    'usa': { name: 'United States of America', capital: 'Washington, D.C.', continent: 'North America', government: 'Republic', language: 'English' },
    'venezuela': { name: 'Venezuela', capital: 'Caracas', continent: 'South America', government: 'Republic', language: 'Spanish' },
    
    // Africa
    'algeria': { name: 'Algeria', capital: 'Algiers', continent: 'Africa', government: 'Presidential republic', language: 'Arabic' },
    'angola': { name: 'Angola', capital: 'Luanda', continent: 'Africa', government: 'Republic', language: 'Portuguese' },
    'cameron': { name: 'Cameroon', capital: 'Yaoundé', continent: 'Africa', government: 'Republic', language: 'French, English' },
    'chad': { name: 'Chad', capital: 'N\'Djamena', continent: 'Africa', government: 'Presidential republic', language: 'French, Arabic' },
    'egypt': { name: 'Egypt', capital: 'Cairo', continent: 'Africa', government: 'Republic', language: 'Arabic' },
    'ethiopia': { name: 'Ethiopia', capital: 'Addis Ababa', continent: 'Africa', government: 'Republic', language: 'Amharic' },
    'gambia': { name: 'Gambia', capital: 'Banjul', continent: 'Africa', government: 'Republic', language: 'English' },
    'ghana': { name: 'Ghana', capital: 'Accra', continent: 'Africa', government: 'Republic', language: 'English' },
    'guinea': { name: 'Guinea', capital: 'Conakry', continent: 'Africa', government: 'Republic', language: 'French' },
    'kenya': { name: 'Kenya', capital: 'Nairobi', continent: 'Africa', government: 'Republic', language: 'English, Swahili' },
    'liberia': { name: 'Liberia', capital: 'Monrovia', continent: 'Africa', government: 'Republic', language: 'English' },
    'libya': { name: 'Libya', capital: 'Tripoli', continent: 'Africa', government: 'Republic', language: 'Arabic' },
    'madagascar': { name: 'Madagascar', capital: 'Antananarivo', continent: 'Africa', government: 'Republic', language: 'Malagasy, French' },
    'mali': { name: 'Mali', capital: 'Bamako', continent: 'Africa', government: 'Republic', language: 'French' },
    'morocco': { name: 'Morocco', capital: 'Rabat', continent: 'Africa', government: 'Constitutional monarchy', language: 'Arabic' },
    'saf': { name: 'South Africa', capital: 'Pretoria', continent: 'Africa', government: 'Republic', language: 'English, Afrikaans, Zulu, Xhosa' },
    'somalia': { name: 'Somalia', capital: 'Mogadishu', continent: 'Africa', government: 'Republic', language: 'Somali, Arabic' },
    'sudan': { name: 'Sudan', capital: 'Khartoum', continent: 'Africa', government: 'Republic', language: 'Arabic, English' },
    'tanzania': { name: 'Tanzania', capital: 'Dodoma', continent: 'Africa', government: 'Republic', language: 'English, Swahili' },
    'tunisia': { name: 'Tunisia', capital: 'Tunis', continent: 'Africa', government: 'Republic', language: 'Arabic' },
    'uganda': { name: 'Uganda', capital: 'Kampala', continent: 'Africa', government: 'Republic', language: 'English, Swahili' },
    'zambia': { name: 'Zambia', capital: 'Lusaka', continent: 'Africa', government: 'Republic', language: 'English' },
    'zimbabwe': { name: 'Zimbabwe', capital: 'Harare', continent: 'Africa', government: 'Republic', language: 'English, Shona, Ndebele' },
    
    // Special cases
    'greenland': { name: 'Greenland', capital: 'Nuuk', continent: 'North America', government: 'Autonomous territory', language: 'Greenlandic' },
    'vatican': { name: 'Vatican City', capital: 'Vatican City', continent: 'Europe', government: 'Absolute monarchy', language: 'Italian' },
    'zealand': { name: 'New Zealand', capital: 'Wellington', continent: 'Oceania', government: 'Constitutional monarchy', language: 'English' }
};

class FlagValidator {
    constructor() {
        this.imgDir = path.join(__dirname, 'img');
        this.report = {
            total: 0,
            valid: 0,
            invalid: 0,
            missing: [],
            extra: [],
            errors: [],
            warnings: []
        };
    }

    // Check if image file exists and is valid
    validateImageFile(filename) {
        const filePath = path.join(this.imgDir, filename);
        
        if (!fs.existsSync(filePath)) {
            this.report.errors.push(`Missing image file: ${filename}`);
            return false;
        }

        const stats = fs.statSync(filePath);
        if (stats.size === 0) {
            this.report.errors.push(`Empty image file: ${filename}`);
            return false;
        }

        if (stats.size < 1000) {
            this.report.warnings.push(`Small image file: ${filename} (${stats.size} bytes)`);
        }

        return true;
    }

    // Validate flag metadata against official data
    validateMetadata(flagKey, metadata) {
        const official = OFFICIAL_FLAGS[flagKey];
        if (!official) {
            this.report.errors.push(`No official data found for: ${flagKey}`);
            return false;
        }

        let isValid = true;
        const differences = [];

        // Check country name
        if (metadata.country !== official.name) {
            differences.push(`Country name: "${metadata.country}" vs "${official.name}"`);
            isValid = false;
        }

        // Check capital
        if (metadata.capital !== official.capital) {
            differences.push(`Capital: "${metadata.capital}" vs "${official.capital}"`);
            isValid = false;
        }

        // Check continent
        if (metadata.continent !== official.continent) {
            differences.push(`Continent: "${metadata.continent}" vs "${official.continent}"`);
            isValid = false;
        }

        // Check government type (more flexible)
        if (!this.governmentTypeMatches(metadata.government, official.government)) {
            differences.push(`Government: "${metadata.government}" vs "${official.government}"`);
            this.report.warnings.push(`Government type mismatch for ${flagKey}: ${metadata.government} vs ${official.government}`);
        }

        // Check language (more flexible)
        if (!this.languageMatches(metadata.language, official.language)) {
            differences.push(`Language: "${metadata.language}" vs "${official.language}"`);
            this.report.warnings.push(`Language mismatch for ${flagKey}: ${metadata.language} vs ${official.language}`);
        }

        if (differences.length > 0) {
            this.report.errors.push(`Metadata validation failed for ${flagKey}: ${differences.join(', ')}`);
        }

        return isValid;
    }

    // Flexible government type matching
    governmentTypeMatches(current, official) {
        const currentLower = current.toLowerCase();
        const officialLower = official.toLowerCase();
        
        // Common variations
        const variations = {
            'republic': ['republic', 'democratic republic', 'federal republic'],
            'monarchy': ['monarchy', 'constitutional monarchy', 'absolute monarchy'],
            'communist': ['communist state', 'socialist republic', 'communist republic']
        };

        for (const [type, variants] of Object.entries(variations)) {
            if (variants.some(v => currentLower.includes(v)) && variants.some(v => officialLower.includes(v))) {
                return true;
            }
        }

        return currentLower === officialLower;
    }

    // Flexible language matching
    languageMatches(current, official) {
        const currentLower = current.toLowerCase();
        const officialLower = official.toLowerCase();
        
        // Split by common separators
        const currentLangs = currentLower.split(/[,;]/).map(l => l.trim());
        const officialLangs = officialLower.split(/[,;]/).map(l => l.trim());
        
        // Check if there's any overlap
        return currentLangs.some(lang => officialLangs.some(officialLang => 
            officialLang.includes(lang) || lang.includes(officialLang)
        ));
    }

    // Get current flag metadata from the app
    getCurrentMetadata() {
        const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
        const entriesMatch = htmlContent.match(/entries\.push\(new Entry\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)"\)\);/g);
        
        const metadata = {};
        if (entriesMatch) {
            entriesMatch.forEach(entry => {
                const match = entry.match(/new Entry\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)"\)/);
                if (match) {
                    const [, key, country, capital, continent, government, language] = match;
                    metadata[key] = { country, capital, continent, government, language };
                }
            });
        }
        
        return metadata;
    }

    // Run complete validation
    validate() {
        console.log('🔍 Starting flag database validation...\n');
        
        const currentMetadata = this.getCurrentMetadata();
        const imageFiles = fs.readdirSync(this.imgDir).filter(file => file.endsWith('.jpg'));
        
        this.report.total = Object.keys(OFFICIAL_FLAGS).length;
        
        // Validate each official flag
        for (const [flagKey, officialData] of Object.entries(OFFICIAL_FLAGS)) {
            const imageFile = `${flagKey}.jpg`;
            
            // Check if image exists
            if (!this.validateImageFile(imageFile)) {
                this.report.missing.push(flagKey);
                this.report.invalid++;
                continue;
            }
            
            // Check if metadata exists
            if (!currentMetadata[flagKey]) {
                this.report.errors.push(`Missing metadata for: ${flagKey}`);
                this.report.invalid++;
                continue;
            }
            
            // Validate metadata
            if (this.validateMetadata(flagKey, currentMetadata[flagKey])) {
                this.report.valid++;
            } else {
                this.report.invalid++;
            }
        }
        
        // Check for extra files
        for (const imageFile of imageFiles) {
            const flagKey = imageFile.replace('.jpg', '');
            if (!OFFICIAL_FLAGS[flagKey]) {
                this.report.extra.push(flagKey);
                this.report.warnings.push(`Extra image file: ${imageFile}`);
            }
        }
        
        this.generateReport();
    }

    // Generate validation report
    generateReport() {
        console.log('📊 FLAG VALIDATION REPORT');
        console.log('=' .repeat(50));
        
        console.log(`\n📈 SUMMARY:`);
        console.log(`Total flags: ${this.report.total}`);
        console.log(`✅ Valid: ${this.report.valid}`);
        console.log(`❌ Invalid: ${this.report.invalid}`);
        console.log(`📊 Success rate: ${((this.report.valid / this.report.total) * 100).toFixed(1)}%`);
        
        if (this.report.missing.length > 0) {
            console.log(`\n❌ MISSING IMAGES (${this.report.missing.length}):`);
            this.report.missing.forEach(flag => console.log(`  - ${flag}.jpg`));
        }
        
        if (this.report.extra.length > 0) {
            console.log(`\n⚠️  EXTRA IMAGES (${this.report.extra.length}):`);
            this.report.extra.forEach(flag => console.log(`  - ${flag}.jpg`));
        }
        
        if (this.report.errors.length > 0) {
            console.log(`\n🚨 ERRORS (${this.report.errors.length}):`);
            this.report.errors.forEach(error => console.log(`  - ${error}`));
        }
        
        if (this.report.warnings.length > 0) {
            console.log(`\n⚠️  WARNINGS (${this.report.warnings.length}):`);
            this.report.warnings.forEach(warning => console.log(`  - ${warning}`));
        }
        
        console.log('\n' + '=' .repeat(50));
        
        if (this.report.invalid === 0 && this.report.errors.length === 0) {
            console.log('🎉 All flags validated successfully!');
        } else {
            console.log('🔧 Please review and fix the issues above.');
        }
    }
}

// Run validation if script is executed directly
if (require.main === module) {
    const validator = new FlagValidator();
    validator.validate();
}

module.exports = FlagValidator; 
